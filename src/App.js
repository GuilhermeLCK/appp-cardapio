import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import Router from "./Router/Router";
import AuthApp from "./Contexts/AuthApp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthApp>
          <ToastContainer />
          <Router />
        </AuthApp>
      </BrowserRouter>
    </div>
  );
}

export default App;
