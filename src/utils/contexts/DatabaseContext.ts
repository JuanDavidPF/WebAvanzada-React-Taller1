import { createContext } from "react";
import { ComponentCategory } from "../interfaces/ComponentCategory";

export const DatabaseContext = createContext({
  database: [] as ComponentCategory[],

  setDatabase: (updatedDatabase: ComponentCategory[]) => {},
});
