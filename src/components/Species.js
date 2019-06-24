import React from "react";

const Species = props => {
  let className = props.loading ? "loading" : "loaded";
  return (
    <div>
      <h3 className={className}>{"Species: " + props.species}</h3>
    </div>
  );
};

export default Species;
