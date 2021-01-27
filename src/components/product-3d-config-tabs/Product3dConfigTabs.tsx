import React from "react";
import "./product-3d-config-tabs.scss";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import { CustomTab } from "./custom-tab/CustomTab";
import { PantsIcon } from "./icons/PantsIcon";
import { FabricIcon } from "./icons/FabricIcon";
import { ColorsIcon } from "./icons/ColorsIcon";
import { LazerIcon } from "./icons/LazerIcon";
import { DamageIcon } from "./icons/DamageIcon";
import { CustomDesignIcon } from "./icons/CustomDesignIcon";
import { StylingForm } from "./forms/StylingForm";
import { FabricForm } from "./forms/FabricForm";
import { ColorsForm } from "./forms/ColorsForm";
import { LazerForm } from "./forms/LazerForm";
import { DamageForm } from "./forms/DamageForm";
import { MyOwnDesignForm } from "./forms/MyOwnDesignForm";
const { TabPane } = Tabs;

export type IProduct3dConfigTabsProps = {
 product: {
  name: string;
 };
};

const Product3dConfigTabs: React.FC<IProduct3dConfigTabsProps> = ({
 product,
}) => {
 const { name } = product;
 return (
  <div className="product-3d-config-tabs">
   <div className="top-header">
    <div className="title">Product customization</div>
    <div className="product-name">{name}</div>
   </div>

   <Tabs tabPosition={"left"}>
    <TabPane tab={<CustomTab name="Style" icon={<PantsIcon />} />} key="1">
     <StylingForm />
    </TabPane>
    <TabPane tab={<CustomTab name="FABRIC" icon={<FabricIcon />} />} key="2">
     <FabricForm />
    </TabPane>
    <TabPane
     tab={<CustomTab name="BASE COLOUR" icon={<ColorsIcon />} />}
     key="3"
    >
     <ColorsForm />
    </TabPane>
    <TabPane
     tab={<CustomTab name="LASER INTENSITY" icon={<LazerIcon />} />}
     key="4"
    >
     <LazerForm />
    </TabPane>
    <TabPane tab={<CustomTab name="DAMAGES" icon={<DamageIcon />} />} key="5">
     <DamageForm />
    </TabPane>
    <TabPane
     tab={
      <CustomTab
       name={`ADD YOUR \r\n OWN DESIGN`}
       icon={<CustomDesignIcon />}
      />
     }
     key="6"
    >
     <MyOwnDesignForm />
    </TabPane>
   </Tabs>
  </div>
 );
};

export { Product3dConfigTabs };
