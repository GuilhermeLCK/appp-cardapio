import { React, createContext, useEffect, useState } from "react";
import { authFirebase, dbBanco, storage } from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthApp({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [loadingAuth, setLoadingAuth] = useState(false);

  const [loading, setLoading] = useState(true);

  async function LoggedUser(email, password) {
    setLoadingAuth(true);

    await signInWithEmailAndPassword(authFirebase, email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        const docRef = doc(dbBanco, "users", uid);

        const docSnap = await getDoc(docRef);

        let data = {
          uid: uid,
          email: value.user.senha,
          email: value.user.email,
        };

        setUser(data);
        setLoadingAuth(false);
        toast.success(`Seja bem-vinda (o) de volta!`, {
          duration: 2000,
        });
        navigate("/Dashboard");
        localStorage.setItem("LoggedInUser", JSON.stringify(data));
      })
      .catch((error) => {
        toast.error(`Usuário não encontrado.`);
        console.error(error);
        setLoadingAuth(false);
      });
  }

  useEffect(() => {
    async function LoadUser() {
      const storageUser = localStorage.getItem("LoggedInUser");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      } else {
        setLoading(false);
      }
    }

    LoadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        Logged: !!user,
        user,
        LoggedUser,
        loadingAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthApp;
