import React from "react";
import Header from "./Header";
import Pirate from "./Pirate";
import piratesFile from "../data/sample-pirates-array";


const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

function randomize() {
  return pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
}

function App() {
  const [pirates, setPirates] = React.useState(piratesFile);
  return (
    <div>
      <Header title={randomize()} />
      <div className="pirate">
        {/* we map over the pirates state, not the piratesFile */}
        {pirates.map((pirate) => (
          <Pirate key={pirate.name} tagline={randomize()} pirate={pirate} output = {console.log(setPirates())}/>
        ))}
        
      </div>
    </div>
  );
}



export default App;
