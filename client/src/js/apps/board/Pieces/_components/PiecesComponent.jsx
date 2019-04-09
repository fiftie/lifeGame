import React from 'react';

import Pieces from '/Users/fifty/workspace/game/shogi/client/src/js/commons/Pieces/PiecesSrcMapper';

import {PiecesWrapper, PiecesRow, Piece, PieceImg} from '../_styled/PiecesStyled';

export default class PiecesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isOnClick : false,
      isLast : false,
      selectedPiece : [null, null],
      isSelectPiecesList: [
        [false, false, false, false, false, false, false, false, false, ],
        [false, false, false, false, false, false, false, false, false, ],
        [false, false, false, false, false, false, false, false, false, ],
        [false, false, false, false, false, false, false, false, false, ],
        [false, false, false, false, false, false, false, false, false, ],
        [false, false, false, false, false, false, false, false, false, ],
        [false, false, false, false, false, false, false, false, false, ],
        [false, false, false, false, false, false, false, false, false, ],
        [false, false, false, false, false, false, false, false, false, ],
      ],
    }
  }
  render() {
    return (
      <PiecesWrapper>{this._renderPieces()}</PiecesWrapper>
    )
  }

  _renderPieces() {
    const { firstBoardPieces, lastBoardPieces } = this.props;
    const render = firstBoardPieces.map((firstList, i) => {
      return (
        <PiecesRow key={i}>
          {this._renderPiece(firstList, lastBoardPieces[i], i)}
        </PiecesRow>
      );
    })
    return(
      <div>
        {render}
      </div>
    );
  }

  _renderPiece(firstList, lastList, row) {
    const result = firstList.map((first, i) => {
      const last = lastList[i];
      if(first > last) {
        return (
          <Piece key={i} onClick={() => this._handlerOnClick(row, i)} isSelect={this.state.isSelectPiecesList[row][i]}>
            <PieceImg src={Pieces[first]} />
          </Piece>
        );
      }else if(last > first){
        return (
          <Piece key={i} onClick={() => this._handlerOnClick(row, i, true)} isSelect={this.state.isSelectPiecesList[row][i]}>
            <PieceImg src={Pieces[last]} isReverse={true} />
          </Piece>
        );
      }else{
        return(
          <Piece key={i} onClick={() => this._handlerOnClick(row, i)} />
        );
      }
    })
    return result;
  }

  _handlerOnClick(row, col, isLast = false) {
    if(!this.state.isOnClick) {
      this._selectPiece(row, col, isLast);
    }else{
      const { selectedPiece, isLast, isSelectPiecesList } = this.state;
      const { lastPlay, firstPlay } = this.props;
      isLast 
        ? lastPlay(selectedPiece, [row, col]) 
        : firstPlay(selectedPiece, [row, col]);
      const isSelectPiecesList_copy = isSelectPiecesList.slice();
      isSelectPiecesList_copy[selectedPiece[0]][selectedPiece[1]] = false;
      this.setState({isOnClick:false, isSelectPiecesList: isSelectPiecesList_copy});
    }
  }

  _selectPiece(row, col, isLast) {
    const { firstBoardPieces, lastBoardPieces, turn } = this.props;
    const isSelectPiecesList_copy = this.state.isSelectPiecesList.slice();
    if(turn === 0) {
      if(firstBoardPieces[row][col] > 0) {
        isSelectPiecesList_copy[row][col] = true;
        this.setState({isOnClick:true,isLast:isLast,selectedPiece: [row, col], isSelectPiecesList: isSelectPiecesList_copy});
      }
    }else{
      if(lastBoardPieces[row][col] > 0) {
        isSelectPiecesList_copy[row][col] = true;
        this.setState({isOnClick:true,isLast:isLast,selectedPiece: [row, col], isSelectPiecesList: isSelectPiecesList_copy});
      }
    }
  }
}