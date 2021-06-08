import React, { useState } from "react";
import "./App.css";

import { DatabaseContext } from "../../utils/contexts/DatabaseContext";
import { Database } from "../../utils/databases/Database";
import { PCEditor } from "../../components/PCEditor/PCEditor";

export const App = () => {
  return (
    <DatabaseContext.Provider value={Database}>
      <main>
      <PCEditor></PCEditor>
      </main>   
    </DatabaseContext.Provider>
  );
}; //cloese App component
