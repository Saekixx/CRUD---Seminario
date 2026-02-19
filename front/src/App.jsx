import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import EditProduct from "./pages/EditProduct.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreateProduct />}></Route>
        <Route path="/edit/:id" element={<EditProduct />}></Route>
      </Routes>
    </>
  );
}

export default App;
