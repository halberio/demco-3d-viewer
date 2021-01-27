import React from "react";
import { PantsIcon } from "../../icons/PantsIcon";
import "./lazer-open-modal-button.scss";
import { EditBrushIcon } from "../../icons/EditBrushIcon";
export type ILazerOpenModalButtonProps = {
 onClick: () => void;
 title: string;
};

const LazerOpenModalButton: React.FC<ILazerOpenModalButtonProps> = ({
 onClick,
 title,
}) => {
 return (
  <button type="button" className="lazer-open-modal-button" onClick={onClick}>
   <div className="lazer-btn-left-col">
    <PantsIcon />
    <div className="lazer-txt">
     <div className="lazer-txt-black">{title}</div>
     <div className="lazer-txt-silver">Front / Back</div>
    </div>
   </div>
   <div className="icon-brush-container">
    <EditBrushIcon />
   </div>
  </button>
 );
};

export { LazerOpenModalButton };
