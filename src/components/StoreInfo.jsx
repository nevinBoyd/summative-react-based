import { useEffect, useState } from "react";

// fetches and displays store info from mock backend
function StoreInfo() {
  const [storeInfo, setStoreInfo] = useState([]);

  useEffect(() => {
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
  }, []); // ✅ dependency array should be here

  return (
    <div>
      {storeInfo.length === 0 ? (
        <p>Loading store info...</p>
      ) : (
        storeInfo.map((store) => (
          <div key={store.id}>
            <h3>{store.name}</h3>
            <p>{store.description}</p>
            <p>📞 {store.phone_number}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default StoreInfo;
