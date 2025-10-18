import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App" style={{ textAlign: "center", padding: "2rem" }}>
      <NavBar />
      <main>
        <h1>Welcome to Get Baked</h1>
        <p>Serving savory and sweet pies, cookies, and coffee.</p>

        {/* Placeholder routes - will add components later */}
        <Routes>
          <Route path="/" element={<p>Home Page</p>} />
          <Route path="/menu" element={<p>Menu Page</p>} />
          <Route path="/admin" element={<p>Admin Page</p>} />
          <Route path="/about" element={<p>About Page</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
