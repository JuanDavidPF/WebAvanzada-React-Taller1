import React, { useState } from "react";
import "./App.css";

import { Viewer } from "../../components/Viewer/Viewer";
import { DashboardHolder } from "../DashboardsHolder/DashboardHolder";
import { DatabaseContext } from "../../utils/contexts/DatabaseContext";
import { Database } from "../../utils/databases/Database";

export const App = () => {
  return (
    <DatabaseContext.Provider value={Database}>
      <main>
        <Viewer></Viewer>
        <DashboardHolder></DashboardHolder>
      </main>
    </DatabaseContext.Provider>
  );
}; //cloese App component
