import React, { useContext } from "react";
import { DatabaseContext } from "../../utils/contexts/DatabaseContext";
import { ComponentCategory } from "../../utils/interfaces/ComponentCategory";

import { DashboardButton } from "../DashboardButton/DashboardButton";
import "./DashboardButtonsHolder.css";

export const DashboardButtonsHolder = () => {
  const { database, setDatabase } = useContext(DatabaseContext);

  const HandleButtonSelection = (id: string) => {
    const database_clone: ComponentCategory[] = JSON.parse(
      JSON.stringify(database)
    );

    database_clone.forEach((component) => {
      component.selected = component.id === id;
    });

    setDatabase(database_clone);
  };

  return (
    <div className="buttonsHolder">
      {database.map((databaseMapped) => {
        return (
          <DashboardButton
            iconImagePath={databaseMapped.iconPath}
            selected={databaseMapped.selected}
            id={databaseMapped.id}
            ButtonClickHandler={HandleButtonSelection}
          />
        );
      })}
    </div>
  );
}; //closes DashboardIconsHolder component
