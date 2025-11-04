import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function UserForm({ setUser }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert("All fields are required!");
      return;
    }

    try {
      const res = await API.post("/users", form);
      const newUser = res.data;

      // save full user object
      localStorage.setItem("user", JSON.stringify(newUser));

      // also store userId separately
      localStorage.setItem("userId", newUser.id);

      setUser(newUser);

      // redirect to homepage
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Failed to register/login. Please check backend logs.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
        marginBottom: "20px",
        maxWidth: "400px",
        margin: "40px auto",
      }}
    >
      <h4
        style={{ marginBottom: "10px", color: "#007bff", textAlign: "center" }}
      >
        Login / Register
      </h4>

      <input
        className="form-control"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="form-control"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className="form-control"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <button className="btn btn-primary" type="submit">
        🚀 Continue
      </button>
    </form>
  );
}
