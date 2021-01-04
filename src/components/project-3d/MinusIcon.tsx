import React from "react";

export type IMinusIconProps = {};

const MinusIcon: React.FC<IMinusIconProps> = () => {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width={26.25}
   height={2.109}
   viewBox="0 0 26.25 2.109"
  >
   <path
    data-name="Path 3303"
    d="M25.547 2.105a.678.678 0 00.5-.205.678.678 0 00.205-.5V.7a.678.678 0 00-.205-.5.678.678 0 00-.5-.205H.7A.678.678 0 00.2.2a.678.678 0 00-.2.505v.7a.678.678 0 00.205.5.678.678 0 00.5.205z"
    fill="#7c7c7c"
   />
  </svg>
 );
};

export { MinusIcon };
