import { createContext } from "react";
import { DatabaseType } from "../interfaces/DatabaseType";

export const DatabaseContext = createContext({} as DatabaseType);
