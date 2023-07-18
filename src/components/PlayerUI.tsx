import { Box, Typography } from "@mui/material";
import { Card } from "./CardUI";
import HandUI from "./HandUI";
import _ from "lodash"
import './PlayerUI.css'

export interface Props {
  player: Player,
}

export enum PlayerStatus {
  Waiting = "waiting",
  Active = "active",
  Busted = "busted",
  Passed = "passed",
}

export interface Player {
  display_name: string,
  player_id: string,
  status: PlayerStatus,
  hand: Card[]
}

/**
 * Renders a complete representation for a single player (hand, status, name, etc).
 */
export default function PlayerUI({player}: Props): JSX.Element {
  return <Box className="BlackjackPlayer">
    <Typography display={"inline"} variant="h4">Player: {player.display_name}</Typography>
    <Typography className={`StatusText status_${player.status}`} display={"inline"} variant="h4"> ({_.startCase(player.status)})</Typography>
    <HandUI hand={player.hand}/>
  </Box>
}