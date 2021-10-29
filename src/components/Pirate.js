import React from "react";
import "../assets/css/Pirate.css";

function Pirate({name,tagline}) {
    return (
      <section>
          <h3>{name}</h3>
        <p>Favorite saying: {tagline}</p>
      </section>
    );
  }
export default Pirate;