import { useState, useEffect, createContext, useContext } from "react";
import { auth, db } from "./firebase";
import Cookies from "js-cookie";
import firebase from "firebase";
import { useHistory } from "react-router-dom"; 
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
  login: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (
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
  ) => Promise<void>;
  createUserWithGoogleSignIn: () => Promise<void>

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
  const history = useHistory(); 

  async function signOut() {
    Cookies.remove("user");
    await auth.signOut();
  }

  async function login(email: string, password: string) {
    const credential = await auth.signInWithEmailAndPassword(email, password);
    if (credential.user) {
      const userDocs = await db
        .collection("users")
        .where("email", "==", email)
        .get();
      Cookies.set("user", userDocs.docs[0].data(), { expires: 7 });
      history.push("/");
    }
  }
  async function createUserWithGoogleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      if (result.user) {
        await db.collection("users").doc(result.user.uid).set({
          email: result.user.email,
          name: result.user.displayName,
        });
        const finalUserDoc = await db.collection('users').doc(result.user.uid).get(); 
        const finalUser = userFromSnapshot(finalUserDoc);
        setCurrentUser(finalUser); 
      } 
     
      history.push("/profile"); 
    } catch (error) {
      console.error(error);
    }
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
    createUserWithGoogleSignIn
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
