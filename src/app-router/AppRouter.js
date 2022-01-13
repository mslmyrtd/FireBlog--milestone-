import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import Details from "../pages/Details";
import UpdateBlog from "../pages/UpdateBlog";
const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<NewBlog />} />

          <Route path="/details/:id" element={<Details />} />
          <Route path="/update/:id" element={<UpdateBlog />} />
        </Routes>
      </Router>
    </div>
  );
};
export default AppRouter;
