import AddProductForm from "../components/AddProductForm";

function AdminPage() {
  return (
    <section style={{ textAlign: "center", marginTop: "2rem", color: "#fff" }}>
      <h2>Admin Dashboard</h2>
      <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
        Add, update, or remove menu items for <strong>Get Baked</strong>.
      </p>
      <AddProductForm />
    </section>
  );
}

export default AdminPage;
