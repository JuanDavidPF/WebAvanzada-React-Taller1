import React, { useState } from "react";
import { getImageSrc } from "../../utils/functions/getImageSrc";
import "./Viewer.css";

export const Viewer = () => {
  const [imagePath, setImagePath] = useState(
    getImageSrc("images/chassis/test.png")
  );

  return (
    <section className="viewer">
      <img src={imagePath} alt="chasis" />
    </section>
  );
}; //cloese Viewer component
