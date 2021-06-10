import React from "react";
import { CardsHolder } from "../CardsHolder/CardsHolder";
import { DashboardButtonsHolder } from "../DashboardButtonsHolder/DashboardButtonsHolder";
import { TabContext } from "../../utils/contexts/TabContext";
import { TabType } from "../../utils/interfaces/TabType";

import "./DashboardHolder.css";

export const DashboardHolder = () => {


  return (
    <section className="dashboard__holder">
  
        <DashboardButtonsHolder></DashboardButtonsHolder>
        <CardsHolder></CardsHolder>
    
    </section>
  );
}; //cloese App component
