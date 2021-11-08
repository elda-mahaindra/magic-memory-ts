// ---------------------------------------------- modules import
import { ICard } from "../models/card";

export interface ISingleCardProps {
  card: ICard;
  flipped: boolean;
  onChoice: (card: ICard) => void;
}
