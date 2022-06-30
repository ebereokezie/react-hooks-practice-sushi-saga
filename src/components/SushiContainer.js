import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, setMoreSushi, moreSushi, handleEatSushi }) {
  



  function showMoreSushi(){
     setMoreSushi(moreSushi +4)

  }
  return (
    <div className="belt">
      {sushis.map((sushi) =>{
        return(
          <Sushi key = {sushi.id} sushi ={sushi} handleEatSushi={handleEatSushi}/>
        )
      })}
      <MoreButton showMoreSushi = {showMoreSushi} />
    </div>
  );
}

export default SushiContainer;
