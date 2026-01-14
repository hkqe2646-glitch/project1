import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";

import Select from "./Components/select";
import Details from "./Components/Details";
import Final from "./Components/Final";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/buses" element={<Select />} />
        <Route path="/details" element={<Details />} />
        <Route path="/success" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;