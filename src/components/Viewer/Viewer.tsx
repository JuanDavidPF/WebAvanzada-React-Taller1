import React, {useState}  from "react";
import "./Viewer.css";



export const Viewer = () => {
  const [imagePath, setImagePath] = useState("/resources/images/chasis/test.png");
  
  return (
    <section className="viewer"> 
      <img src={imagePath} alt="chasis" />  
    </section>
  );
}; //cloese PCViewer component
