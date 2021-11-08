// ---------------------------------------------- modules import
import { FunctionComponent, useEffect, useState } from "react";

import SingleCard from "./components/singleCard";

import { ICard } from "./models/card";

import "./App.css";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

// ---------------------------------------------- the component
const App: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const [cards, setCards] = useState<ICard[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<ICard | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<ICard | null>(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: ICard) => {
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
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.src === choiceOne.src) return { ...card, matched: true };

            return card;
          })
        );

        resetTurn();
      } else {
        console.log("those cards did not match");

        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);
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
