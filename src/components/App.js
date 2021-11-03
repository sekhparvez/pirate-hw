import React from "react";
import Header from "./Header";
import Pirate from "./Pirate";
import AddPirateForm from "./AddPirateForm";
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
  const addPirate = (pirate) => {
    const newPirates = [...pirates,pirate];
    setPirates(newPirates);
  };
  const removePirate = (pirateName) => {
    console.log("removing a pirate");
    const newPirates = pirates.filter(pirate => pirate.name !== pirateName);
    setPirates(newPirates);
  };
  
  return (
    <div>
      <Header title={randomize()} />
      <div className="pirate">
        <AddPirateForm addPirate= {addPirate}></AddPirateForm>
        {/* we map over the pirates state, not the piratesFile */}
        {pirates.map((pirate) => (
          <Pirate key={pirate.name} tagline={randomize()} pirate={pirate} remove= {removePirate}/>
        ))}
        
      </div>
    </div>
  );
}



export default App;
