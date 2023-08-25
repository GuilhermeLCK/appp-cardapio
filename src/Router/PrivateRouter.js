import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthApp";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({ children }) {
  const { Logged, loading } = useContext(AuthContext);

  if (loading) {
    return <div></div>;
  }
  if (!Logged) {
    return <Navigate to="/" />;
  }

  return children;
}
