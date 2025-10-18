import ProductList from "../components/ProductList";
import AddProductForm from "../components/AddProductForm";

function MenuPage() {
  return (
    <section>
      <h2>Our Menu</h2>
      <AddProductForm />
      <ProductList />
    </section>
  );
}

export default MenuPage;
