import { createContext } from "react";
import { TabType } from "../interfaces/TabType";

export const TabContext = createContext({
  tab: "Motherboards",
  setTab: (updatedTab: TabType) => {},
});
