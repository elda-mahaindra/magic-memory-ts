export interface ISingleCardProps {
  card: { id: number; src: string };
  onChoice: (card: { id: number; src: string }) => void;
}
