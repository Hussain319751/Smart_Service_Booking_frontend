import { useEffect, useState } from "react";
import API from "../api/api";
import BookingForm from "../components/BookingForm";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const fetchServices = async () => {
    try {
      const res = await API.get("/services");
      console.log("Fetched services:", res.data);

      if (Array.isArray(res.data)) {
        setServices(res.data);
      } else {
        console.error("Expected an array but got:", res.data);
        setServices([]);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      setServices([]);
    }
  };

  useEffect(() => {
    console.log("here in");
    fetchServices();
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "30px auto", padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#2c3e50",
          fontSize: "28px",
        }}
      >
        Our Services
      </h2>

      {/* Service Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {Array.isArray(services) &&
          services.map((s) => (
            <div
              key={s.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                padding: "20px",
                textAlign: "center",
                border: "1px solid #eee",
              }}
            >
              <h3 style={{ color: "#27ae60", marginBottom: "10px" }}>
                {s.serviceName}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  minHeight: "60px",
                  marginBottom: "15px",
                }}
              >
                {s.description}
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#e67e22",
                }}
              >
                ₹{s.price}
              </p>

              {/* Book Button */}
              <button
                className="btn btn-success mt-2"
                onClick={() => setSelectedService(s)}
              >
                Book
              </button>
            </div>
          ))}
      </div>

      {/* Booking Form Modal */}
      {selectedService && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "500px" }}
          >
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title">
                  Book: {selectedService.serviceName}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedService(null)}
                ></button>
              </div>
              <div className="modal-body">
                <BookingForm
                  service={selectedService}
                  refresh={fetchServices}
                  onClose={() => setSelectedService(null)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
