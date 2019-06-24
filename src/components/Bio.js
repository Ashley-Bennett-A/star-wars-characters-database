import React from "react";

const Bio = props => {
  let className = props.loading ? "loading" : "loaded";
  return (
    <div className="bio">
      <h3 className={className}>
        {props.info1}
        {props.value1}
      </h3>
      <br />
      <h3 className={className}>
        {props.info2}
        {props.value2}
      </h3>
      <br />
      <h3 className={className}>
        {props.info3}
        {props.value3}
      </h3>
    </div>
  );
};

export default Bio;
