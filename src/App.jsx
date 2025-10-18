import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage"; // main landing content with store info and locations
import MenuPage from "./pages/MenuPage"; // menu and CRUD area

function App() {
  return (
    // App wrapper handles the full layout including NavBar and centered hero content
    <div className="App">
      <NavBar />

      {/* 
        The .hero-section is positioned just below the browser edge, 
        horizontally and vertically centered for balanced landing aesthetics.
      */}
      <main className="hero-section">
        <h1>Welcome to Get Baked</h1>
        <p>Serving Savory and Sweet Pies, Cookies, and Coffee.</p>

        {/* Main routes for page navigation */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/admin" element={<p>Admin Page</p>} />
          <Route path="/about" element={<p>About Page</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
