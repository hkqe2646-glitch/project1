

import { Navigate, useNavigate } from "react-router-dom";
import "./Final.css";


function Final() {
    const navigate=useNavigate();
  return (
    <div className="final-page">
      <div className="final-card">
        <h1>🎉 Booking Successful</h1>
        <p>Your ticket has been booked successfully.</p>
        <button onClick={() => {
            navigate("/")
        }}>Book Another Ticket</button>
      </div>
    </div>
  );
}

export default Final;
