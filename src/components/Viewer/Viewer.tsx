import React, {useState}  from "react";
import "./Viewer.css";
import chasis from "./../../resources/images/chasis/test.png"


export const Viewer = () => {
  const [imagePath, setImagePath] = useState(chasis);
  
  return (
    <section className="viewer"> 
      <img src={imagePath} alt="chasis" />  
    </section>
  );
}; //cloese PCViewer component
