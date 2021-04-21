import { Viewer } from "../../components/Viewer/Viewer";
import { ComponentCategory } from "../../utils/interfaces/ComponentCategory";
import React from "react";
import { DashboardHolder } from "../DashboardsHolder/DashboardHolder";
import "./App.css";
import { DatabaseContext } from "../../utils/contexts/DatabaseContext";

const PC_Components_Database: ComponentCategory[] = [
  {
    id: "Chassis",
    iconPath: "/resources/images/icons/chasis_dashboard_icon.png",
    references: [{}, {}],
    selected: true,
  },

  {
    id: "CPUs",
    iconPath: "/resources/images/icons/chasis_dashboard_icon.png",
    references: [{}, {}],
  },

  {
    id: "GPUs",
    iconPath: "/resources/images/icons/chasis_dashboard_icon.png",
    references: [{}, {}],
  },

  {
    id: "Motherboards",
    iconPath: "/resources/images/icons/chasis_dashboard_icon.png",
    references: [{}, {}],
  },

  {
    id: "RAMs",
    iconPath: "/resources/images/icons/ram_dashboard_icon.png",
    references: [{}, {}],
  },
]; //Closes Database declaration

export const App = () => {
  const [PC_Components, setPC_Components] = React.useState(
    PC_Components_Database
  );

  const HandleDatabaseUpdate = (updatedDatabase: ComponentCategory[]) => {

    setPC_Components(updatedDatabase);
  };

  return (
    <main>
      <DatabaseContext.Provider
        value={{ database: PC_Components, setDatabase: setPC_Components }}
      >
        <Viewer></Viewer>
        <DashboardHolder></DashboardHolder>
      </DatabaseContext.Provider>
    </main>
  );
}; //cloese App component
