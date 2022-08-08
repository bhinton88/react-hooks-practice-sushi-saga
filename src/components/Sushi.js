import React, { useState } from "react";

function Sushi({ sushi, setBudget, handleEmptyPlate, budget }) {

  const { name, img_url, price } = sushi
  const [isEaten, setIsEaten ] = useState(false)

  function handleEatenSushi ( ) {
    console.log(sushi.price)
    setIsEaten(isEaten => {
      if(budget < sushi.price){
        alert("You can not exceed your budget!")
      } else{
        setBudget(budget => budget - sushi.price)
        handleEmptyPlate(sushi)
        setIsEaten(isEaten => !isEaten)
      }
    })
  }

  return (
    <div className="sushi">
      <div className= "plate" onClick={handleEatenSushi}>
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
