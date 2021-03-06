
import "./App.css";

import { DatabaseContext } from "../../utils/contexts/DatabaseContext";
import { Database } from "../../databases/Database";
import { PCEditor } from "../PCEditor/PCEditor";


export const App = () => {

  

  return (
    <DatabaseContext.Provider value={Database}>

        <main>
          <PCEditor></PCEditor>
        </main>

    </DatabaseContext.Provider>
  );
}; //cloese App component
