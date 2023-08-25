import { React, useState, useContext } from "react";
import "./Login.scss";
import { FaSquarespace } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "../../Contexts/AuthApp";
import { toast } from "react-toastify";
function Login() {
  const { LoggedUser, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisbli, setPasswordSisibli] = useState("");

  async function handleSubmitLogar(e) {
    e.preventDefault();
    if (password !== "" && email !== "") {
      await LoggedUser(email, password);
    }
  }

  return (
    <div className="container-Login">
      <div className="container-banner"></div>
      <div className="container-center">
        <div className="login">
          <div className="login-area">
            <FaSquarespace size={60} />
          </div>

          <form onSubmit={handleSubmitLogar}>
            <h1> Entrar no gerenciador</h1>
            <input
              type="text"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Sua senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button type="submit">
              {loadingAuth ? (
                <ClipLoader color="#ffffff" size={16} speedMultiplier={0.7} />
              ) : (
                "Acessar"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
