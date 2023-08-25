import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRouter from "./PrivateRouter";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/" element={<Login />} />

        <Route
          path="/Dashboard"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
}

export default Router;
