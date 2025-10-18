import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

// fetches and displays all products
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <p>Loading menu...</p>
      ) : (
        products.map((item) => <ProductCard key={item.id} product={item} />)
      )}
    </div>
  );
}

export default ProductList;
