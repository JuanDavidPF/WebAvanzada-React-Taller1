import { createContext } from "react";
import { PCType } from "../interfaces/PCType";

export const PCContext = createContext({
  currentPC: {
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
  } as PCType,
  setCurrentPC: (updatedPC: PCType) => {},
  calculatePrice: (PCCopy: PCType) =>{},
});
