import "./Card.css";

interface CardProps {
  thumbnailUrl?: string;
}

export const Card: React.FC<CardProps> = ({thumbnailUrl}) => {
  return (
    <div className="card">
      <img draggable={false} src={thumbnailUrl || ""} alt="" />
    </div>
  );
}; //cloese Card component
