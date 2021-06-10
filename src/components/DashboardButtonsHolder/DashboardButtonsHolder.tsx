import { DashboardButton } from "../DashboardButton/DashboardButton";
import "./DashboardButtonsHolder.css";

export const DashboardButtonsHolder = () => {
  return (
    <div className="buttonsHolder">
      <DashboardButton localTab={"Chassis"} />
      <DashboardButton localTab={"CPUs"} />
      <DashboardButton localTab={"Motherboards"} />
      <DashboardButton localTab={"GPUs"} />
      <DashboardButton localTab={"RAMs"} />
      <DashboardButton localTab={"HDDs"} />
    </div>
  );
}; //closes DashboardIconsHolder component
