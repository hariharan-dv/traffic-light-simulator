import React, { useEffect, useState } from "react";
import Light from "./Light";

const Main = () => {
  const [color, setColor] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor((color + 1) % 3);
    }, 10000);
    console.log(color);
    return () => {
      clearTimeout(timer);
    };
  }, [color]);
  return (
    <div className="center">
      <div className="box">
        <Light color="red" active={color === 0} />

        <Light color="yellow" active={color === 1} />

        <Light color="green" active={color === 2} />
      </div>
    </div>
  );
};

export default Main;
