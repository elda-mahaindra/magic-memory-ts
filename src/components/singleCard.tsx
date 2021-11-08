// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

import { ISingleCardProps } from "./common";

import "./singleCard.css";

// ---------------------------------------------- the component
const SingleCard: FunctionComponent<ISingleCardProps> = ({
  card,
  disabled,
  flipped,
  onChoice,
}) => {
  // ---------------------------------------------- handlers
  const handleClick = () => {
    if (!disabled) {
      onChoice(card);
    }
  };

  // ---------------------------------------------- content
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />

        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="cover"
        />
      </div>
    </div>
  );
};

export default SingleCard;
