import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

// const API = "http://localhost:3001/sushis";

// when we click on the sushi, maybe we can push sushi name to the array, 
// then for every sushi name, a plate will be placed on the table

function App() {
  const [plates, setPlates] = useState([])
  const [budget, setBudget] = useState(250)

  function handleEmptyPlate (sushi) {
      setPlates([...plates,sushi.name])
      console.log(sushi.name)
  }

  return (
    <div className="app">
      <SushiContainer 
        budget={budget}
        setBudget={setBudget}
        handleEmptyPlate={handleEmptyPlate}
      />
      <Table budget={budget} plates={plates}  />
    </div>
  );
}

export default App;
