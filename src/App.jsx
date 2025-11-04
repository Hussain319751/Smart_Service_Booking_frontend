import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UsersPage from "./pages/UsersPage";
import ServicesPage from "./pages/ServicesPage";
import BookingsPage from "./pages/BookingsPage";
import Home from "./components/Home";
import ServiceForm from "./components/ServiceForm";
import UserForm from "./components/UsersForm"; // 👈 login/signup form

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      {user && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={
            user ? <Navigate to="/" replace /> : <UserForm setUser={setUser} />
          }
        />
        <Route
          path="/users"
          element={user ? <UsersPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/services"
          element={user ? <ServicesPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/addservice"
          element={user ? <ServiceForm /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/bookings"
          element={user ? <BookingsPage /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
