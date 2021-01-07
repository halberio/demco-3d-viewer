import React from "react";
import { Product3dConfigTabs } from "../product-3d-config-tabs/Product3dConfigTabs";
import { Project3d } from "../project-3d/Project3d";
import "./product-view.scss";

export type IAppProps = {};

function ProductView() {
 const product = {
  name: "IDWS22JE2 FLARED JEANS",
 };
 return (
  <div className="product-view-container">
   <div className="product-view-left">
    <Project3d />
   </div>
   <div className="product-view-right">
    <Product3dConfigTabs {...{ product }} />
   </div>
  </div>
 );
}

export default ProductView;
