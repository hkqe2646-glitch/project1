

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !age) {
      alert("Please fill all fields");
      return;
    }

    navigate("/buses", {
      state: { user: { name, age } }
    });
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1> ONLINE BUS BOOKING🚌</h1>

        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={handleSubmit}>Search Buses</button>
      </div>
    </div>
  );
}

export default Register;

