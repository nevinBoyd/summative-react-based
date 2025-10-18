// displays individual product details
function ProductCard({ product }) {
  const { name, type, price } = product;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "0.5rem auto",
        padding: "0.5rem",
        width: "60%",
        borderRadius: "8px",
      }}
    >
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
