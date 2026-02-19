import { Button } from "@radix-ui/themes";
import { useState } from "react";

function ProductForm({ onSubmit, initialData }) {
  const [product, setProduct] = useState(initialData);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <div className="flex justify-center min-h-screen items-start pt-10">
      <form
        className="w-full max-w-md flex flex-col gap-3 p-4 bg-white rounded shadow"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Editar Producto</h1>

        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={product.name}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <label htmlFor="description">Descripción</label>
        <input
          type="text"
          name="description"
          id="description"
          value={product.description}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          name="stock"
          id="stock"
          value={product.stock}
          onChange={handleChange}
          required
          className="border px-2 py-1 rounded"
        />

        <Button type="submit" className="mt-4">
          Guardar
        </Button>
      </form>
    </div>
  );
}

export default ProductForm;
