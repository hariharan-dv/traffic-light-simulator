import React from "react";

const Light = ({ active, color }) => {
  return (
    <div
      className="circle"
      style={{ backgroundColor: color, opacity: active ? 1 : 0.05 }}
    ></div>
  );
};

export default Light;
