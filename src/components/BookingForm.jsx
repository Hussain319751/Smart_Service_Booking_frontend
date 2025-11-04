import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function BookingForm({ service, refresh, onClose }) {
  const [form, setForm] = useState({
    userId: Number(localStorage.getItem("userId")), // auto-fetched logged-in user
    serviceId: service.id, // passed from ServicesPage
    bookingDate: "",
    location: "",
    status: "PENDING",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // hook to navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.bookingDate || !form.location) {
      alert("Please provide booking date and location.");
      return;
    }

    setLoading(true);
    try {
      // Send booking data to backend
      await API.post("/bookings", {
        ...form,
        userId: Number(form.userId),
        serviceId: Number(form.serviceId),
        location: form.location,
      });

      // Reset form
      setForm({
        userId: Number(localStorage.getItem("userId")),
        serviceId: service.id,
        bookingDate: "",
        location: "",
        status: "PENDING",
      });

      refresh(); // refresh bookings if needed
      onClose(); // close modal
      alert("Booking created successfully ✅");

      // Redirect to services page
      navigate("/services");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Date input */}
      <input
        type="date"
        className="form-control mb-2"
        value={form.bookingDate}
        onChange={(e) => setForm({ ...form, bookingDate: e.target.value })}
        required
      />

      {/* Location input */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        required
      />

      <button
        className="btn btn-warning w-100"
        type="submit"
        disabled={loading}
      >
        {loading ? "Saving..." : "Confirm Booking"}
      </button>
    </form>
  );
}
