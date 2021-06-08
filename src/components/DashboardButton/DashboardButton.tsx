import React, { useContext } from "react";
import { TabContext } from "../../utils/contexts/TabContext";

import { TabType } from "../../utils/interfaces/TabType";
import { getTabIconSrc } from "../../utils/functions/getTabIconSrc";

import "./DashboardButton.css";

interface DashboadButtonProps {
  localTab: TabType;
}

export const DashboardButton: React.FC<DashboadButtonProps> = ({
  localTab,
}) => {

  const { tab, setTab } = useContext(TabContext);
  const handleClickedTab = () => setTab(localTab);

  return (
    <div
      className={`DashboadButton${
        tab === localTab ? " DashboardButton--selected" : ""
      }`}
      onClick={handleClickedTab}
    >
      <img src={getTabIconSrc(localTab)} alt="Dashboard Icon" />
    </div>
  );
};
