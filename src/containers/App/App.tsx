import React, { useState } from "react";
import "./App.css";

import { DatabaseContext } from "../../utils/contexts/DatabaseContext";
import { Database } from "../../databases/Database";
import { PCEditor } from "../PCEditor/PCEditor";
import { TabContext } from "../../utils/contexts/TabContext";
import { TabType } from "../../utils/interfaces/TabType";

export const App = () => {
  const [tab, setTab] = React.useState("Motherboards" as TabType);

  return (
    <DatabaseContext.Provider value={Database}>
      <TabContext.Provider value={{ tab: tab, setTab: setTab }}>
        <main>
          <PCEditor></PCEditor>
        </main>
      </TabContext.Provider>
    </DatabaseContext.Provider>
  );
}; //cloese App component
