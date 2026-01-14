;


import { useLocation, useNavigate } from "react-router-dom";
import "./Detail.css";

function Details() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="details-page">
        <h2>No booking data found</h2>
      </div>
    );
  }

  const { user, bus } = state;

  return (
    <div className="details-page">
      <div className="details-card">
        <h1 className="title">🧾 Booking Details</h1>

        <div className="section">
          <h4>User Details</h4>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </div>

        <div className="section">
          <h4>Bus Details</h4>
          <p><strong>Bus:</strong> {bus.name}</p>
          <p><strong>Route:</strong> {bus.from} → {bus.to}</p>
          <p><strong>Price:</strong> ₹{bus.price}</p>
        </div>

        <button onClick={() => navigate("/success")}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default Details;
