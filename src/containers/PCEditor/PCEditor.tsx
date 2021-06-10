import { useState } from "react";
import { DashboardHolder } from "../../components/DashboardsHolder/DashboardHolder";
import { Viewer } from "../../components/Viewer/Viewer";
import { PCContext } from "../../utils/contexts/PCContext";
import { TabContext } from "../../utils/contexts/TabContext";
import { PCType } from "../../utils/interfaces/PCType";
import { TabType } from "../../utils/interfaces/TabType";
import "./PCEditor.css";

const initialPCInfo: PCType = {
  chassis: {
    brand: "",
    reference: "",
    price: 0,
    thumbnailImg: "",
  },
  motherboard: {
    price: 0,
    brand: "",
    reference: "",
    chipset: "",
    memorySupportTechnology: "DDR",
    size: "mini-ITX",
    HDDSlostAmount: 0,
    RAMSlotsAmount: 0,
    PCIeSlotsAmount: 0,
    thumbnailImg: "",
  },
  price: 0,
};

interface PCEditorProps {
  editPC?: PCType;
}

export const PCEditor: React.FC<PCEditorProps> = ({ editPC }) => {
  const [tab, setTab] = useState("Chassis" as TabType);

  const [currentPC, setCurrentPC] = useState<PCType>({ ...initialPCInfo });

  const CalculatePrice = (PCCopy: PCType) => {
    PCCopy.price = 0;

    if (PCCopy.chassis) PCCopy.price += PCCopy.chassis?.price;
    if (PCCopy.motherboard) PCCopy.price += PCCopy.motherboard?.price;
    if (PCCopy.motherboard?.CPU) PCCopy.price += PCCopy.motherboard?.CPU.price;

    return PCCopy.price;
  };

  return (
    <TabContext.Provider value={{ tab: tab, setTab: setTab }}>
      <PCContext.Provider
        value={{
          currentPC: currentPC,
          setCurrentPC: setCurrentPC,
          calculatePrice: CalculatePrice,
        }}
      >
        <section>
          <Viewer></Viewer>
          <DashboardHolder></DashboardHolder>
        </section>
      </PCContext.Provider>
    </TabContext.Provider>
  );
}; //cloese Viewer component
