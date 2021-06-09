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
      /*
      //Motherboards
      */

      case "Motherboards":
        return (
          db.Motherboards &&
          db.Motherboards.map((mb) => {
            return <Card thumbnailUrl={mb.thumbnailImg}></Card>;
          })
        );
      /*
      //CPUs
      */
      case "CPUs":
        return (
          db.CPUs &&
          db.CPUs.map((cpu) => {
            return <Card thumbnailUrl={cpu.thumbnailImg}></Card>;
          })
        );
      /*
      //GPUs
      */
      case "GPUs":
        return (
          db.GPUs &&
          db.GPUs.map((elem) => {
            return <Card></Card>;
          })
        );
      /*
      //RAMs
      */
      case "RAMs":
        return (
          db.RAMs &&
          db.RAMs.map((elem) => {
            return <Card></Card>;
          })
        );
      /*
      //HDDs
      */
      case "HDDs":
        return (
          db.HDDs &&
          db.HDDs.map((elem) => {
            return <Card></Card>;
          })
        );
      /*
      //Chassis
      */
      case "Chassis":
        return (
          db.Chassis &&
          db.Chassis.map((elem) => {
            return <Card></Card>;
          })
        );
    } //closes Switch on Tab
  }; //closes LoadCardMethod

  return <div className="cardsHolder">{LoadCards()}</div>;
}; //closes CardsHolder component
