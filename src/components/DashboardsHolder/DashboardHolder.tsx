import React from "react";
import { CardsHolder } from "../CardsHolder/CardsHolder";
import { DashboardButtonsHolder } from "../DashboardButtonsHolder/DashboardButtonsHolder";
import { TabContext } from "../../utils/contexts/TabContext";
import { TabType } from "../../utils/interfaces/TabType";

import "./DashboardHolder.css";

export const DashboardHolder = () => {
  const [tab, setTab] = React.useState(
    "Motherboards" as TabType    
  );

  return (
    <section className="dashboard__holder">
      <TabContext.Provider value={{tab:tab, setTab:setTab}}>
        <DashboardButtonsHolder></DashboardButtonsHolder>
        <CardsHolder></CardsHolder>
      </TabContext.Provider>
    </section>
  );
}; //cloese App component
