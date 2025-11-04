import { useEffect, useState } from "react";
import API from "../api/api";

export default function BookingForm({ refreshTrigger }) {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data);
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [refreshTrigger]); // Refresh if trigger changes (optional external trigger)

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
        Booking Records
      </h3>

      {bookings.length === 0 ? (
        <p style={{ textAlign: "center" }}>No bookings found.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={cellStyle}>Booking ID</th>
              <th style={cellStyle}>User ID</th>
              <th style={cellStyle}>Service ID</th>
              <th style={cellStyle}>Booking Date</th>
              <th style={cellStyle}>Location</th>
              <th style={cellStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td style={cellStyle}>{b.id}</td>
                <td style={cellStyle}>{b.user?.id || b.userId}</td>
                <td style={cellStyle}>{b.service?.id || b.serviceId}</td>
                <td style={cellStyle}>{b.bookingDate}</td>
                <td style={cellStyle}>{b.location || "N/A"}</td>
                <td style={cellStyle}>{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const cellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
};
