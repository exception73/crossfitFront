import React from "react";
import ReactLoading from "react-loading";

const LoadingComponent = ({color}) => {
  let setColor = color ? color : "white"
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}>
      <ReactLoading type="bars" color="setColor" />
    </div>
  );
};

export default LoadingComponent;
