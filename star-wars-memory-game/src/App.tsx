import React, { useState } from "react";
import Card from "./components/Card/Card";
import { Container } from "./App.styles";

import { createBoard } from "./setup";
import { shuffleArray } from "./utils";

import { CardType } from "./setup";

const App = () => {
  console.log(createBoard());

  const [cards, setCards] = useState<CardType[]>(createBoard());
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  return (
    <Container>
      {cards.map(card =>
        <p>
          {card.id}
        </p>
      )}
    </Container>
  );
};

export default App;
