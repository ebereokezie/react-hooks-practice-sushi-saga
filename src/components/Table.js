import React from "react";

function Table({ plates = [], sushiPrice }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((plate, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  

  return (
    <>
      <h1 className="remaining">
        You have: ${sushiPrice} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
