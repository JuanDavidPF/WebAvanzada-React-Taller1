

import { DashboardButton } from "../DashboardButton/DashboardButton";
import "./DashboardButtonsHolder.css";

export const DashboardButtonsHolder = () => {
  
  return (
    <div className="buttonsHolder">
 
          <DashboardButton localTab={"Motherboards"}/>
          <DashboardButton localTab={"CPUs"}/>     
          <DashboardButton localTab={"GPUs"}/>     
          <DashboardButton localTab={"RAMs"}/>     
          <DashboardButton localTab={"HDDs"}/>     
          <DashboardButton localTab={"Chassis"}/>                 
 
    </div>
  );
}; //closes DashboardIconsHolder component
