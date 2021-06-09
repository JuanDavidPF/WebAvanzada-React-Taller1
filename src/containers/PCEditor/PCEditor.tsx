import { DashboardHolder } from "../../components/DashboardsHolder/DashboardHolder";
import { Viewer } from "../../components/Viewer/Viewer";
import "./PCEditor.css";

export const PCEditor = () => {
  return (
    <section>
      <Viewer></Viewer>
      <DashboardHolder></DashboardHolder>
    </section>
  );
}; //cloese Viewer component
