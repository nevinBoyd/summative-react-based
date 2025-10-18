import { useState } from "react";

// simple form to add a new product
function AddProductForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      name,
      type,
      price: parseFloat(price),
    };

    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Added product:", data);
        // basic feedback
        alert(`${data.name} added to menu!`);
        setName("");
        setType("");
        setPrice("");
      })
      .catch((err) => console.error("POST error:", err));
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "1rem auto",
        padding: "1rem",
        width: "60%",
        border: "1px solid #aaa",
        borderRadius: "8px",
      }}
    >
      <h3>Add New Product</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Type (Pie, Coffee, Cookie...)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
