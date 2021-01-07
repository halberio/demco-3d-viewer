import React, { ReactNode } from "react";
import "./custom-tab.scss";
export type ICustomTabProps = {
 name: string;
 icon: ReactNode;
};

const CustomTab: React.FC<ICustomTabProps> = ({ name, icon }) => {
 return (
  <div className="custom-tab">
   <div className="custom-icon-container">{icon}</div>
   <div className="name">{name}</div>
  </div>
 );
};

export { CustomTab };
