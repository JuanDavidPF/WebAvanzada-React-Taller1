import { useContext } from "react";
import { PCContext } from "../../utils/contexts/PCContext";
import { TabContext } from "../../utils/contexts/TabContext";

import { RAMType } from "../../utils/interfaces/RAMType";
import "./Card.css";

interface CardProps {
  part: any;
  thumbnailUrl?: string;
  name: string;
  price: number;
  handleClick: (elem: any) => void;
}

export const Card: React.FC<CardProps> = ({
  part,
  thumbnailUrl,
  name,
  price,
  handleClick,
}) => {
  const { currentPC, setCurrentPC } = useContext(PCContext);
  const { tab, setTab } = useContext(TabContext);

  const handleCardClick = () => {
    handleClick(part);
  };

  return (
    <div
      className={`card${
        tab === "Chassis" && currentPC.chassis === part ? " selected" : ""
      }`}
      onClick={handleCardClick}
    >
      <img draggable={false} src={thumbnailUrl || ""} alt="" />
      <h1>{name}</h1>
      <h2>{"$" + price}</h2>
    </div>
  );
}; //cloese Card component
