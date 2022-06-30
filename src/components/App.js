import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [moreSushi, setMoreSushi] = useState(0)
  const [sushiPrice, setSushiPrice] = useState(100)

  useEffect(()=> {
    fetch("http://localhost:3001/sushis")
    .then(data => data.json())
    .then(data => setSushis(data))
  }, [])

  function handleEatSushi(wholeSushi){
    const remainingFunds = sushiPrice - wholeSushi.price
    if(remainingFunds >= 0){
    setSushiPrice(sushiPrice - wholeSushi.price)
    setSushis(sushis.map((sushi) => sushi.id === wholeSushi.id ? {...sushi, eaten: true} : sushi))}
  }

  return (
    <div className="app">
      <SushiContainer sushis ={sushis.slice(moreSushi, moreSushi + 4)} moreSushi = {moreSushi} setMoreSushi = {setMoreSushi} handleEatSushi ={handleEatSushi}/>
      <Table sushiPrice={sushiPrice} plates = {sushis.filter((sushi) => sushi.eaten === true)}/>
    </div>
  );
}

export default App;
