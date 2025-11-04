import { useState } from "react";
import API from "../api/api";

export default function ServiceForm({ refresh }) {
  const [form, setForm] = useState({
    serviceName: "",
    description: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.serviceName || !form.description || !form.price) {
      alert("All fields are required!");
      return;
    }
    await API.post("/services", { ...form, price: parseFloat(form.price) });
    setForm({ serviceName: "", description: "", price: "" });
    refresh();
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
      }}
    >
      <h4 style={{ marginBottom: "10px", color: "#28a745" }}>
        Add New Service
      </h4>

      <input
        className="form-control"
        placeholder="Service Name"
        value={form.serviceName}
        onChange={(e) => setForm({ ...form, serviceName: e.target.value })}
        style={{ padding: "10px", borderRadius: "6px" }}
      />

      <input
        className="form-control"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        style={{ padding: "10px", borderRadius: "6px" }}
      />

      <input
        type="number"
        className="form-control"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        style={{ padding: "10px", borderRadius: "6px" }}
      />

      <button
        className="btn btn-success"
        type="submit"
        style={{ marginTop: "10px", padding: "10px", fontWeight: "bold" }}
      >
        ✅ Add Service
      </button>
    </form>
  );
}
