import { DashboardHolder } from "../../containers/DashboardsHolder/DashboardHolder";
import { Viewer } from "../Viewer/Viewer";
import "./PCEditor.css";

export const PCEditor = () => {
  return (
    <section>
      <Viewer></Viewer>
      <DashboardHolder></DashboardHolder>
    </section>
  );
}; //cloese Viewer component
