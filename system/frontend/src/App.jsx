import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import AdminDashboard from "./admin/Dashboard";
import Home from "./page/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
