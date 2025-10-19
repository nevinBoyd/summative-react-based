import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import AddProductForm from "../components/AddProductForm";

function MenuPage() {
  const [products, setProducts] = useState([]);

  // fetch all products once on mount
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // function to add a new product to local state after POST
  function handleAddProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  return (
    <section style={{ textAlign: "center", color: "#fff" }}>
      <h2>Our Menu</h2>
      <AddProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} />
    </section>
  );
}

export default MenuPage;
