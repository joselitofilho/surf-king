import { BoardProps } from 'boardgame.io/react'
import React from 'react'
import { G } from '../game'

interface LocalBoardProps extends BoardProps {
  G: G
}

class Board extends React.Component<LocalBoardProps> {
  render(): JSX.Element {
    return (
      <div>
        <span>{this.props.G.cells[29].obstacle?.name}</span>
      </div>
    )
  }
}

export default Board
