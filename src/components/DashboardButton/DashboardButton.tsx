import React from "react";
import { getOriginalNode } from "typescript";
import { getImageSrc } from "../../utils/functions/getImageSrc";
import "./DashboardButton.css";

interface DashboadButtonProps {
  iconImagePath?: string;
  selected?: boolean;
  id: string;
  ButtonClickHandler: (id: string) => void;
}

export const DashboardButton: React.FC<DashboadButtonProps> = ({
  iconImagePath,
  selected,
  id,
  ButtonClickHandler,
}) => {
  const ButtonClicked = () => {
    ButtonClickHandler(id);
  };

  return (
    <div
      className={`DashboadButton ${
        selected ? "DashboardButton--selected" : ""
      }`}
      onClick={ButtonClicked}
    >
      <img
        src={
          (iconImagePath && getImageSrc(iconImagePath)) ||
          getImageSrc("images/icons/undefined_dashboard_icon.png")
        }
        alt="Dashboard Icon"
      />
    </div>
  );
};
