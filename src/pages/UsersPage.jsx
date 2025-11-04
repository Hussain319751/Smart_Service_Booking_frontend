import { useEffect, useState } from "react";
import API from "../api/api";
import UserForm from "../components/UsersForm";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Users
      </h2>

      {/* User Form */}
      <div style={{ marginBottom: "30px" }}>
        <UserForm refresh={fetchUsers} />
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "#fff" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr
              key={u.id}
              style={{
                backgroundColor: i % 2 === 0 ? "#f2f2f2" : "#ffffff",
              }}
            >
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {u.id}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {u.name}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {u.email}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {u.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
