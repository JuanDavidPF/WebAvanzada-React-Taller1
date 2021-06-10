import React, { useContext, useState } from "react";
import { TabContext } from "../../utils/contexts/TabContext";
import { getImageSrc } from "../../utils/functions/getImageSrc";
import "./Viewer.css";

export const Viewer = () => {
  const { tab } = useContext(TabContext);
  const [imagePath] = useState(
    getImageSrc("images/chassis/test.png")
  );

  return (
    <section className="viewer">
      <div>
        <h1>{tab}</h1>
      </div>
      <img src={imagePath} alt="chasis" />
    </section>
  );
}; //cloese Viewer component
