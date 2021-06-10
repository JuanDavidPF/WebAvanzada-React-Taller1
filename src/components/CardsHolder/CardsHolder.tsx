import React, { useContext } from "react";
import { DatabaseContext } from "../../utils/contexts/DatabaseContext";
import { PCContext } from "../../utils/contexts/PCContext";
import { TabContext } from "../../utils/contexts/TabContext";
import { ChasisType } from "../../utils/interfaces/ChasisType";
import { CPUType } from "../../utils/interfaces/CPUType";
import { GPUType } from "../../utils/interfaces/GPUType";
import { HDDType } from "../../utils/interfaces/HDDType";
import { MotherboardType } from "../../utils/interfaces/MotherboardType";
import { PCType } from "../../utils/interfaces/PCType";

import { RAMType } from "../../utils/interfaces/RAMType";
import { Card } from "../Card/Card";
import "./CardsHolder.css";

export const CardsHolder = () => {
  const { tab, setTab } = useContext(TabContext);
  const { currentPC, setCurrentPC } = useContext(PCContext);
  const db = useContext(DatabaseContext);

  const CalculatePrice = (PCCopy: PCType) => {
    PCCopy.price = 0;

    if (PCCopy.chassis) PCCopy.price += PCCopy.chassis?.price;
    if (PCCopy.motherboard) PCCopy.price += PCCopy.motherboard?.price;
    if (PCCopy.motherboard?.CPU) PCCopy.price += PCCopy.motherboard?.CPU.price;
    
    setCurrentPC(PCCopy);
  };

  const MotherBoardClicked = (mb: MotherboardType) => {};

  const CPUClickecd = (cpu: CPUType) => {};

  const GPUClicked = (gpu: GPUType) => {};

  const RAMClicked = (ram: RAMType) => {};

  const HDDClicked = (hdd: HDDType) => {};

  const ChassisClicked = (chassis: ChasisType) => {
    let PCCopy: PCType = JSON.parse(JSON.stringify(currentPC));
    PCCopy.chassis = chassis;
    CalculatePrice(PCCopy);
  };

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
            return (
              <Card
                part={mb}
                thumbnailUrl={mb.thumbnailImg}
                name={mb.brand + " " + mb.reference}
                price={mb.price}
                handleClick={MotherBoardClicked}
              ></Card>
            );
          })
        );
      /*
      //CPUs
      */
      case "CPUs":
        return (
          db.CPUs &&
          db.CPUs.map((cpu) => {
            return (
              <Card
                part={cpu}
                thumbnailUrl={cpu.thumbnailImg}
                name={cpu.brand + " " + cpu.reference}
                price={cpu.price}
                handleClick={CPUClickecd}
              ></Card>
            );
          })
        );
      /*
      //GPUs
      */
      case "GPUs":
        return (
          db.GPUs &&
          db.GPUs.map((gpu) => {
            return (
              <Card
                part={gpu}
                thumbnailUrl={gpu.thumbnailImg}
                name={gpu.brand + " " + gpu.reference}
                price={gpu.price}
                handleClick={GPUClicked}
              ></Card>
            );
          })
        );
      /*
      //RAMs
      */
      case "RAMs":
        return (
          db.RAMs &&
          db.RAMs.map((ram) => {
            return (
              <Card
                part={ram}
                thumbnailUrl={ram.thumbnailImg}
                name={ram.brand + " " + ram.reference}
                price={ram.price}
                handleClick={RAMClicked}
              ></Card>
            );
          })
        );
      /*
      //HDDs
      */
      case "HDDs":
        return (
          db.HDDs &&
          db.HDDs.map((hdd) => {
            return (
              <Card
                part={hdd}
                thumbnailUrl={hdd.thumbnailImg}
                name={hdd.brand + " " + hdd.reference}
                price={hdd.price}
                handleClick={HDDClicked}
              ></Card>
            );
          })
        );
      /*
      //Chassis
      */
      case "Chassis":
        return (
          db.Chassis &&
          db.Chassis.map((chassis) => {
            return (
              <Card
                part={chassis}
                thumbnailUrl={chassis.thumbnailImg}
                name={chassis.brand + " " + chassis.reference}
                price={chassis.price}
                handleClick={ChassisClicked}
              ></Card>
            );
          })
        );
    } //closes Switch on Tab
  }; //closes LoadCardMethod

  return <div className="cardsHolder">{LoadCards()}</div>;
}; //closes CardsHolder component
