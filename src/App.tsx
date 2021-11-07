// ---------------------------------------------- modules import
import { FunctionComponent, useEffect, useState } from "react";

import SingleCard from "./components/singleCard";

import "./App.css";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

// ---------------------------------------------- the component
const App: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const [cards, setCards] = useState<{ id: number; src: string }[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<{
    id: number;
    src: string;
  } | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<{
    id: number;
    src: string;
  } | null>(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: { id: number; src: string }) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  // ---------------------------------------------- effects
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("those cards match");

        resetTurn();
      } else {
        console.log("those cards did not match");

        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  // ---------------------------------------------- content
  return (
    <div className="App">
      <h1>Magic Match</h1>

      <button onClick={() => shuffleCards()}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} key={card.id} onChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
};

export default App;
