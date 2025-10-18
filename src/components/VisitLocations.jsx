import { useState } from "react";

function VisitLocations() {
  const locations = {
    ENC: {
      name: "Encinitas",
      address: "976 Coast Highway 101, Encinitas, CA 92024",
      tagline:
        "Cruise by our North County spot — chill vibes, mural wall, and board swaps every Friday.",
    },
    SC: {
      name: "San Clemente",
      address: "976 Avenida Del Mar, San Clemente, CA 92672",
      tagline:
        "Hit the pier, grab a cold brew, and drop by the shop — art, decks & mix tapes all week.",
    },
    VEN: {
      name: "Ventura",
      address: "976 Main Street, Ventura, CA 93001",
      tagline:
        "Our OG road-trip stop — records spinning, local artists, and seaside pop-ups.",
    },
  };

  const [selected, setSelected] = useState(null);

  return (
    <section className="visit-locations">
      <h2>Visit Our Spots</h2>
      <p className="subtitle">
        Swing through any of our spots — same vibe, different view.
      </p>

      <div className="location-buttons">
        {Object.keys(locations).map((key) => (
          <button
            key={key}
            className={`loc-btn ${selected === key ? "active" : ""}`}
            onClick={() => setSelected(selected === key ? null : key)}
          >
            {key}
          </button>
        ))}
      </div>

      {selected && (
        <div className="location-info">
          <h3>{locations[selected].name}</h3>
          <p>{locations[selected].address}</p>
          <p className="tagline">{locations[selected].tagline}</p>
        </div>
      )}
    </section>
  );
}

export default VisitLocations;
