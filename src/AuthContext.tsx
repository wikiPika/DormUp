import { useState, useEffect, createContext, useContext } from "react";
import { auth, db } from "./firebase";
import Cookies from "js-cookie";
import firebase from "firebase";


interface currentUser {
  email: string;
  age: number;
  college: string;
  displayName: string;
  gender: string;
  major: string;
  hobbies: string[];
  pfp: string;
}

interface AuthContextProps {
  currentUser: currentUser;
  login: any;
  signOut: any;
  signUp: any;
}

function userFromSnapshot(
  doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
): currentUser {
  const data = doc.data();
  let user = {} as currentUser;
  if (data) {
    user.age = data.age;
    user.email = data.email;
    user.college = data.college;
    user.displayName = data.displayName;
    user.gender = data.gender;
    user.major = data.major;
    user.hobbies = data.hobbies;
    user.pfp = data.pfp;
  }
  return user;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState<currentUser | null>();
  const [loading, setLoading] = useState(true);

  const signOut = () => {
    Cookies.remove("user");
    return auth.signOut();
  };

  async function login(email:string, password:string) {
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
      const doc = await db.collection("users").doc(uid).get();
      const finalUser = userFromSnapshot(doc);
      setCurrentUser(finalUser);
      Cookies.set("user", finalUser, { expires: 7 });
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
    currentUser: currentUser!,
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
