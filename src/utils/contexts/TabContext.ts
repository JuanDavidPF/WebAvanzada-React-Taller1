import { createContext } from "react";
import { TabType } from "../interfaces/TabType";

export const TabContext = createContext({
  tab: "Motherboards" as TabType,
  setTab: (updatedTab: TabType) => {},
});
