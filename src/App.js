import "./styles.css";
import React, { useState } from "react";

const travel = {
  Mountain: [
    {
      name: "Swiss Alps – The Magical Mountains",
      description:
        "The dramatic peaks of Dammastock and the snow-clad majestic summit of Matterhorn have always amazed and left hikers spellbound with its astonishing beauty."
    },
    {
      name: "Mount Fuji – The Volcanic Beauty",
      description:
        "Mount Fuji is nearly 12,400 ft tall and is Japan’s No.1 tourist attraction. The breathtaking views here never fail to impress anybody who comes here."
    },
    {
      name: "Mauna Kea – The Gem Of Pacific Ocean",
      description:
        "Mt Everest is known to be the tallest mountain in the world, but if you consider the height of Mauna Kea which is hidden under the Pacific Ocean, then Mauna Kea would be the tallest peak of the world."
    }
  ],
  Sea: [
    {
      name: "Sunset Beach, Oahu",
      description:
        "One of the world's best places to watch big wave surfing in winter (the beach is home to the Vans Triple Crown), the water here becomes as calm as a lake in summer, making it an excellent spot for snorkeling. "
    },
    {
      name: "Matira Beach, Bora Bora",
      description:
        "Matira is perhaps the most famous of Tahiti's beaches, and for good reason: The mile-long stretch of silky, powder-white sand slopes gently into a shallow emerald lagoon, and is backed by a thick curtain of palms and tropical foliage. "
    },
    {
      name: "Gokarna, Karnataka",
      description:
        "Gokarna in Karnataka is situated 190 kilometres south of Goa and makes for a wonderful change from Goa’s fast pace! Famous for the Mahabaleshwar temple"
    }
  ],
  Treekking: [
    {
      name: "Poon Hill Trek (Nepal)",
      description:
        "A shorter exposure to the Annapurna region than the Base Camp trek, the Poon Hill Trek is an incredible way to be introduced to the area and trekking in general. It reaches a maximum altitude of 3,210m and is suitable for all reasonably fit walkers. "
    },
    {
      name: "Annapurna Circuit",
      description:
        "This ancient trade route has been open to foreign trekkers since 1977 and is one of the most beautiful hikes on the planet. "
    },
    {
      name: "Markha Valley Trek, Ladakh",
      description:
        "The Markha Valley trek strains for a week across a wonderfully desolate moonscape, circling south from Leh through the jagged ridges that flank the south bank of the Indus River before emerging near the famous Buddhist gompa (monastery) at Hemis. "
    }
  ]
};

export default function App() {
  const [location, setLocation] = useState("Mountain");

  function onclickHandler(location) {
    console.log("location", location);
    setLocation(location);
  }

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Travelpedia 🧭</h1>
          <h2>Select the location To see the places</h2>
          <div className="btn-container">
            {Object.keys(travel).map(function (location) {
              return (
                <button
                  className="btn"
                  onClick={() => onclickHandler(location)}
                  key={location}
                >
                  {location}
                </button>
              );
            })}
          </div>
        </div>
      </header>
      <h3>This are Some of the Famous places</h3>
      <hr></hr>
      <section className="section">
        <ul className="mid">
          {travel[location].map((des) => {
            return (
              <li key={des.name} className="list">
                <h3>{des.name}</h3>
                <p>{des.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
