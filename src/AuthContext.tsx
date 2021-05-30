import { useState, useEffect, createContext, useContext } from "react";
import { auth, db } from "./firebase";
import Cookies from "js-cookie";

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  const signOut = () => {
    Cookies.remove("user");
    return auth.signOut();
  };

  async function login(email, password) {
    const userDocs = await db
      .collection("users")
      .where("email", "==", email)
      .get();
    Cookies.set("user", userDocs.docs[0].data(), { expires: 7 });
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function signUp(
    email: string,
    displayName: string,
    age: number,
    bio: string,
    college: string,
    gender: string,
    hobbies: string[],
    major: string,
    pfp: string,
    year: number,
    uid: string
  ) {
    try {
      await db.collection("users").doc(uid).set({
        email,
        displayName,
        age,
        bio,
        college,
        gender,
        hobbies,
        major,
        pfp,
        year,
      });
      const user = await db.collection("users").doc(uid).get();
      if (user) setCurrentUser(user.data());
      Cookies.set("user", user, { expires: 7 });
    } catch (error) {
      console.error(error);
      return "Error creating user";
    }
  }

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
      setLoading(false);
    } else {
      setCurrentUser(null);
      setLoading(false);
    }
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
