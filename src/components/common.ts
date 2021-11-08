// ---------------------------------------------- modules import
import { ICard } from "../models/card";

export interface ISingleCardProps {
  card: ICard;
  disabled: boolean;
  flipped: boolean;
  onChoice: (card: ICard) => void;
}
