import React from 'react';

import {Board, AppWrapper, PieceBoardLeft, PieceBoardRight} from '../_styles/BoardComponentStyled';
import Piece from '../Pieces/_containers/PiecesContainer'

export default class BoradComponent extends React.Component {
  render() {
    return (
      <AppWrapper>
        <PieceBoardLeft></PieceBoardLeft>
        <Board>
          <Piece />
          {/* <Piece src={'media/pieces/fuhyo.png'}></Piece> */}
        </Board>
        <PieceBoardRight></PieceBoardRight>
      </AppWrapper>
    )
  }
}