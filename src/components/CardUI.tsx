import { Paper, Typography } from "@mui/material";
import './Card.css'

export enum CardValue {
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Jack = "jack",
  Queen = "queen",
  King = "king",
  Ace = "ace"
}

export enum CardSuit {
  Heart = "heart",
  Diamond = "diamond",
  Spade = "spade",
  Club = "club"
}

export interface Card {
  suit: CardSuit,
  value: CardValue,
}

export interface Props {
  card: Card
}

/**
 * Renders an individual card with a specific suit and value.
 */
export default function CardUI({card: {suit, value}}: Props): JSX.Element {
  return <Paper className="BlackjackCard" elevation={10}>
    <Typography className="SuitText" variant="h5" textAlign={"right"}>{suitToSymbol(suit)}</Typography>
    <Typography className="ValueText" variant="h4" textAlign={"center"} >{valueToSymbol(value)}</Typography>
    <Typography className="SuitText" variant="h5" textAlign={"left"}>{suitToSymbol(suit)}</Typography>
  </Paper>
}

function valueToSymbol(value: CardValue): string | number {
  if (typeof value === "string") {
    return value.charAt(0).toUpperCase()
  }

  return value
}

function suitToSymbol(suit: CardSuit): string {
  switch (suit) {
    case CardSuit.Heart:
      return "♥"
    case CardSuit.Club:
      return "♣"
    case CardSuit.Diamond:
      return "♦"
    case CardSuit.Spade:
      return "♠"
    default: throw Error("")
  }
}