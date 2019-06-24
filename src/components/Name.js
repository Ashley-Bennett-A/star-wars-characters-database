import React from "react";

const Name = props => {
  let className = props.loading ? "loading" : "loaded";

  return (
    <div className={className}>
      <h1> {props.name} </h1>
    </div>
  );
};

export default Name;
