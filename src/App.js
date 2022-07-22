import { Routes, Route } from "react-router-dom";
import "./App.css";
import Carts from "./screens/Carts";
import Product from "./screens/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Carts />} />
      </Routes>
    </div>
  );
}

export default App;
