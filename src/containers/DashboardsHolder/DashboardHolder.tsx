import React from "react";
import { CardsHolder } from "../../components/CardsHolder/CardsHolder";
import { DashboardButtonsHolder } from "../../components/DashboardButtonsHolder/DashboardButtonsHolder";

import "./DashboardHolder.css";

export const DashboardHolder = () => {
  return (
    <section className="dashboard__holder">
      <DashboardButtonsHolder></DashboardButtonsHolder>
      <CardsHolder></CardsHolder>
    </section>
  );
}; //cloese App component
