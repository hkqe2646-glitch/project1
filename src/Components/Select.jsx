

// import { useNavigate, useLocation } from "react-router-dom";
// import "./Select.css"

// function Select() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const user = location.state?.user;

//   const buses = [
//     { id: 1, name: "Express", from: "Chennai", to: "Bangalore", price: 550 },
//     {id: 2, name: "Green Line", from: "Chennai", to: "Coimbatore", price: 600 },
//     {id: 3, name: "Kallada", from: "TVM", to: "Chennai", price: 1500 },
//     {id: 4, name: "A1", from: "TVM", to: "Mumbai", price: 3000 },
//   ]; 

//   const selectBus = (bus) => {
//     navigate("/details", {
//       state: { user, bus }
//     });
//   };

//   return (
//     <div className="bus-page">
//       <h2>Available Buses</h2>

//       {buses.map((bus) => (
//         <div className="bus-card" key={bus.id}>
//           <h3>{bus.name}</h3>
//           <p>{bus.from} → {bus.to}</p>
//           <p>₹{bus.price}</p>
//           <button onClick={() => selectBus(bus)}>Select</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Select;




import { useNavigate, useLocation } from "react-router-dom";
import "./Select.css";

function Select() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  const buses = [
    { id: 1, name: "Express", from: "Chennai", to: "Bangalore", price: 550 },
    { id: 2, name: "Green Line", from: "Chennai", to: "Coimbatore", price: 600 },
    { id: 3, name: "Kallada", from: "TVM", to: "Chennai", price: 1500 },
    { id: 4, name: "A1", from: "TVM", to: "Mumbai", price: 3000 },
  ];

  const selectBus = (bus) => {
    navigate("/Details", {
      state: { user, bus }
    });
  };

  return (
    <div className="bus-page">
      <h1 className="page-title">🚌 Available Buses</h1>

      {user && (
        <h2 className="welcome-text">
          Welcome </h2>
      )}

      <div className="bus-container">
        {buses.map((bus) => (
          <div className="bus-card" key={bus.id}>
            <h3>{bus.name}</h3>

            <p className="route">
              {bus.from} → {bus.to}
            </p>

            <p className="price">₹ {bus.price}</p>

            <button onClick={() => selectBus(bus)}>
              Select Bus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Select;

