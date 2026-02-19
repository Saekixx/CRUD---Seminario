import ProductForm from "../components/ProductForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@radix-ui/themes";

function CreateProduct() {
  const navigate = useNavigate();

  const createProduct = async (product) => {
    try {
      await fetch(`http://localhost:3000/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      navigate("/");
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };
  return (
    <div>
      <Button>
        <Link to="/">Regresar</Link>
      </Button>

      <ProductForm
        onSubmit={createProduct}
        initialData={{ name: "", description: "", stock: 0 }}
      />
    </div>
  );
}

export default CreateProduct;
