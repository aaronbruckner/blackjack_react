import { Box, Typography } from "@mui/material";
import { Card } from "./CardUI";
import HandUI from "./HandUI";
import './PlayerUI.css'

export interface Props {
  player: Player,
}

export interface Player {
  display_name: string,
  player_id: string,
  hand: Card[]
}

export default function PlayerUI({player}: Props): JSX.Element {
  return <Box className="BlackjackPlayer">
    <Typography variant="h4">Player: {player.display_name}</Typography>
    <HandUI hand={player.hand}/>
  </Box>
}