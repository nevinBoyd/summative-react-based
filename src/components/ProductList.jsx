import ProductCard from "./ProductCard";

function ProductList({ products }) {
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
