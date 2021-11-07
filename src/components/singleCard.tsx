// ---------------------------------------------- modules import
import { FunctionComponent } from "react";

import { ISingleCardProps } from "./common";

// ---------------------------------------------- the component
const SingleCard: FunctionComponent<ISingleCardProps> = ({ card }) => (
  <div className="card">
    <div>
      <img alt="card front" className="front" src={card.src} />

      <img alt="card back" className="back" src="/img/cover.png" />
    </div>
  </div>
);

export default SingleCard;
