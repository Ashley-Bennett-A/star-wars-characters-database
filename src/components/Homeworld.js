import React from "react";

const Homeworld = props => {
  let className = props.loading ? "loading" : "loaded";
  return (
    <div>
      <h3 className={className}>{"Homeworld: " + props.homeworld}</h3>
    </div>
  );
};

export default Homeworld;
