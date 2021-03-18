import React from "react";
import { Viewer } from "../../components/Viewer/Viewer";
import { DashboardHolder } from "../DashboardsHolder/DashboardHolder";
import "./App.css";

export const App = () => {
  return (
    <main>
      <Viewer></Viewer>
      <DashboardHolder></DashboardHolder>
    </main>
  );
}; //cloese App component
