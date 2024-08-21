import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Alljobs from "./components/Alljobs";
import DashboardAlljobs from "./pages/DashboardAlljobs";
import DashboardProfile from "./pages/DashboardProfile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/dashboard/all-jobs"
          element={<DashboardAlljobs />}
        ></Route>
        <Route path="/dashboard/profile" element={<DashboardProfile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
