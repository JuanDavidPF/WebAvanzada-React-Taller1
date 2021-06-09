import React, { useContext } from "react";
import { DatabaseContext } from "../../utils/contexts/DatabaseContext";
import { TabContext } from "../../utils/contexts/TabContext";
import { Card } from "../Card/Card";
import "./CardsHolder.css";

export const CardsHolder = () => {
  const { tab, setTab } = useContext(TabContext);
  const db = useContext(DatabaseContext);

  //The cards load depending of the tab selected
  const LoadCards = () => {
    switch (tab) {
      case "Motherboards":
        return (
          db.Motherboards &&
          db.Motherboards.map((elem) => {
            return <Card></Card>;
          })
        );

      case "CPUs":
        return (
          db.CPUs &&
          db.CPUs.map((elem) => {
            return <Card></Card>;
          })
        );
    }//closes Switch on Tab
  }//closes LoadCardMethod

  return <div className="cardsHolder">{LoadCards()}</div>;
}; //closes CardsHolder component
