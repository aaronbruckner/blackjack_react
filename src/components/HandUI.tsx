import { Stack } from "@mui/material";
import CardUI, {Card} from "./CardUI";

export interface Props {
  hand: Card[]
}

export default function HandUI({hand}: Props): JSX.Element {
  return <Stack className="BlackjackHand" direction={"row"} spacing={1}>
    {hand.map(card => <CardUI key={cardKey(card)} card={card}/>)}
  </Stack>
}

function cardKey(card: Card): string {
  return `${card.suit}-${card.value}`
}