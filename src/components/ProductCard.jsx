// displays individual product details
function ProductCard({ product }) {
  const { name, displayName, type, price } = product;

  return (
    <div
      style={{
        border: "1px solid #444",
        margin: "1rem auto",
        padding: "1rem",
        width: "60%",
        borderRadius: "8px",
        backgroundColor: "#1a1a1a",
        color: "#f9f9f9",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.4)",
      }}
    >
      {/* Product name (main creative title) */}
      <h3
        style={{
          marginBottom: "0.25rem",
          fontSize: "1.4rem",
          fontWeight: "bold",
          letterSpacing: "0.5px",
        }}
      >
        {name}
      </h3>

      {/* Real product name under it in quotes */}
      {displayName && (
        <p
          style={{
            fontSize: "0.95rem",
            fontStyle: "italic",
            color: "#bbb",
            marginBottom: "0.75rem",
          }}
        >
          “{displayName}”
        </p>
      )}

      {/* Type and Price */}
      <p style={{ margin: "0.3rem 0", fontSize: "0.95rem" }}>
        Type: <span style={{ color: "#66bde9" }}>{type}</span>
      </p>
      <p style={{ margin: "0.3rem 0", fontSize: "0.95rem" }}>
        Price: <span style={{ color: "#ff66cc" }}>${price.toFixed(2)}</span>
      </p>
    </div>
  );
}

export default ProductCard;
