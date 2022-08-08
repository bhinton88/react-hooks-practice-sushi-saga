import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ budget, setBudget, handleEmptyPlate  } ) {

  const [sushiList, setSushiList] = useState([])
  const [dataCounter, setDataCounter] = useState(0)

  useEffect(() => {
    fetch(`http://localhost:3001/sushis?_start=${dataCounter}&_limit=4`)
    .then(response => response.json())
    .then(data => setSushiList(data))
  },[dataCounter])

  function dataIncrementer() {
    const increasedCounter = dataCounter + 4;
    setDataCounter(increasedCounter)
    console.log(dataCounter)
  }

  return (
    <div className="belt">
      {sushiList.map(value => 
      <Sushi 
        sushi={value} 
        key={value.id}
        budget={budget}
        setBudget={setBudget}
        handleEmptyPlate={handleEmptyPlate}
      /> )}
      <MoreButton dataIncrementer={dataIncrementer} />
    </div>
  );
}

export default SushiContainer;
