// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

import { ISingleCardProps } from "./common";

// ---------------------------------------------- the component
const SingleCard: FunctionComponent<ISingleCardProps> = ({
  card,
  onChoice,
}) => {
  // ---------------------------------------------- handlers
  const handleClick = () => onChoice(card);

  // ---------------------------------------------- content
  return (
    <div className="card">
      <div>
        <img alt="card front" className="front" src={card.src} />

        <img
          alt="card back"
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
