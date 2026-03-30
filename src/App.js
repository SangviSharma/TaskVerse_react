import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import AddTask from "./pages/AddTaskPage";
import Users from "./pages/UsersPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddUser from "./pages/AddUserPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import EditTask from "./pages/EditTaskPage";
import EditUser from "./pages/EditUserPage";



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
   
  
      </Routes>

    </Router>
  );
}

export default App;