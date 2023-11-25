import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import AdminDashboard from "./admin/Dashboard";
import Home from "./page/Home";
function App() {

  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/home" Component={Home}></Route>
      <Route path="/login" Component={Login}></Route>
      <Route path="/register" Component={Registration}></Route>
      <Route path="/admin/dashboard" Component={AdminDashboard}></Route>
    </Routes>
  )
}

export default App
