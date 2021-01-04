import React from "react";
import { Project3d } from "../project-3d/Project3d";
import "./product-view.scss";

export type IAppProps = {};

function ProductView() {
 return (
  <div className="product-view-container">
   <div className="product-view-left">
    <Project3d />
   </div>
   <div className="product-view-right"></div>
  </div>
 );
}

export default ProductView;
