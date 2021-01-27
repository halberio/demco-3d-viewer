import React from "react";
import "./order-button-h.scss";
export type IOrderButtonProps = {
 title: string;
};

const OrderButton: React.FC<IOrderButtonProps> = ({ title }) => {
 return (
  <button type="submit" className="order-btn-h">
   {title ? title : "title prop goes here"}
  </button>
 );
};

export { OrderButton };
