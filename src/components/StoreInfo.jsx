import { useEffect, useState } from "react";

// fetches and displays store info from mock backend
function StoreInfo() {
  const [storeInfo, setStoreInfo] = useState([]);

  useEffect(() => {
    // fetches store info from local JSON server
    fetch("http://localhost:4000/store_info")
      .then((res) => {
        console.log("Response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setStoreInfo(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []); // dependency array ensures fetch runs once on mount

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {storeInfo.length === 0 ? (
        <p>Loading store info...</p>
      ) : (
        storeInfo.map((store) => (
          <div key={store.id}>
            {/* Emoji line representing products */}
            <div
              style={{
                marginBottom: "1.5rem",
                fontSize: "1.5rem",
                letterSpacing: "0.3rem",
              }}
            >
              🥧 🍪 ☕
            </div>

            {/* Social tagline (fade-in animation) */}
            <p
              style={{
                fontSize: "0.75rem", // slightly smaller accent size
                color: "#4ABEDC",
                marginBottom: "0.3rem",
                opacity: 0,
                animation: "fadeIn 2s ease-in-out forwards",
              }}
            >
              Skate on down, bring some comics, slide through the gallery, and
              tag your feed <strong>#976Joint</strong>.
            </p>

            {/* Address line */}
            <p
              style={{
                fontSize: "1rem",
                marginTop: "0.2rem",
                color: "#ccc",
              }}
            >
              976 Pacific Coast Hwy, Hermosa Beach, CA
            </p>

            {/* Contact info with tagline */}
            <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
  <span role="img" aria-label="phone">📞</span> {store.phone_number}
  {store.tagline && (
    <span className="store-phone">
      {store.tagline}
    </span>
  )}
</p>

            {/* Inline animation style (adds fade-in for tagline) */}
            <style>
              {`
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}
            </style>
          </div>
        ))
      )}
    </div>
  );
}

export default StoreInfo;
