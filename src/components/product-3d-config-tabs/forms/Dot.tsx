import React from "react";

export type IDotProps = {
 color: string;
};

const Dot: React.FC<IDotProps> = ({ color }) => {
 return (
  <div
   style={{
    position: "absolute",
    width: "12px",
    height: "12px",
    borderRadius: "100%",
    background: color,
    top: "10px",
    right: "8px",
   }}
  ></div>
 );
};

export { Dot };
