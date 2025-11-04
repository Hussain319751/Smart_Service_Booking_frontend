export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')", // you can replace with your own image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        fontFamily: "Segoe UI, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // semi-transparent dark background
          padding: "40px",
          borderRadius: "15px",
          maxWidth: "700px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          style={{ fontSize: "3rem", marginBottom: "20px", color: "#00e5ff" }}
        >
          ⚡ Welcome to Smart Service Booking
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
          Book home and professional services with just a few clicks. From{" "}
          <b>repairs</b> 🔧 to <b>cleaning</b> 🧹 and <b>maintenance</b> 🏠 —
          we’ve got you covered with reliable and trusted experts.
        </p>
      </div>
    </div>
  );
}
