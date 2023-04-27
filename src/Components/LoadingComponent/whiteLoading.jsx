import React from "react";
import ReactLoading from "react-loading";

const WhiteLoadingComponent = () => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}>
      <ReactLoading type="bars" color="white" />
    </div>
  );
};

export default WhiteLoadingComponent;
