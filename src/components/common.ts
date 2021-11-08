// ---------------------------------------------- modules import
import { ICard } from "../models/card";

export interface ISingleCardProps {
  card: ICard;
  onChoice: (card: ICard) => void;
}
