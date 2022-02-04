// Import all images
import card1 from "../assets/img/card_1.jpg";
import card2 from "../assets/img/card_2.jpg";
import card3 from "../assets/img/card_3.jpg";
import card4 from "../assets/img/card_4.jpg";
import card5 from "../assets/img/card_5.jpg";
import card6 from "../assets/img/card_6.jpg";
import card7 from "../assets/img/card_7.jpg";
import card8 from "../assets/img/card_8.jpg";

//Back image card +
import carBack from "../assets/img/card_back.jpg";

// Create image types
export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

//Create array cards
const cards: string[] = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8
];

// Create card board
export const createBoard = (): CardType[] =>
  //Need 2 of each card
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: carBack,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < card.length ? `card${i + cards.length}` : `card${i - cards.length}`
  }));
