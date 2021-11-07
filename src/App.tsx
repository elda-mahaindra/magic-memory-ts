import { FunctionComponent, useState } from "react";

import "./App.css";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

const App: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const [cards, setCards] = useState<{ id: number; src: string }[]>([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  // ---------------------------------------------- content
  return (
    <div className="App">
      <h1>Magic Match</h1>

      <button onClick={() => shuffleCards()}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img alt="card front" className="front" src={card.src} />

              <img alt="card back" className="back" src="/img/cover.png" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
