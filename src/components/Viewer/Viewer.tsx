import React, { useContext, useState } from "react";
import { PCContext } from "../../utils/contexts/PCContext";
import { TabContext } from "../../utils/contexts/TabContext";
import { getImageSrc } from "../../utils/functions/getImageSrc";
import { PCType } from "../../utils/interfaces/PCType";
import "./Viewer.css";

export const Viewer = () => {
  const { tab } = useContext(TabContext);
  const { currentPC, setCurrentPC } = useContext(PCContext);



  const RemoveChassis = () => {
    let PCCopy: PCType = JSON.parse(JSON.stringify(currentPC));
    delete PCCopy.chassis;
    setCurrentPC(PCCopy);
  };

  return (
    <section className="viewer">
      <header>
        <h1>{tab}</h1>
      </header>

      <main>
        <img
          src={
            (currentPC.chassis && currentPC.chassis.thumbnailImg) ||
            getImageSrc("images/no_chassis.png")
          }
          alt="chasis"
        />
        {tab === "Chassis" && currentPC.chassis && (
          <button onClick={RemoveChassis} className={"deleteChassis"}>
            Remove Chassis
          </button>
        )}
      </main>

      <footer>
        <h1>$ {currentPC.price}</h1>
      </footer>
    </section>
  );
}; //cloese Viewer component
