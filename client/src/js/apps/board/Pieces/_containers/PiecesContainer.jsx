import React from 'react';
import { connect } from 'react-redux';
import PiecesComponent from '../_components/PiecesComponent';
import *as Action from '../_actions/PiecesActionCreators';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    firstBoardPieces: state.pieceComponent.firstBoardPieces,
    firstCapturedPieces: state.pieceComponent.firstCapturedPieces,
    lastBoardPieces: state.pieceComponent.lastBoardPieces,
    lastCapturedPieces: state.pieceComponent.lastCapturedPieces,
    turn: state.pieceComponent.turn,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    firstPlay: (select, selected) => {
      dispatch(Action.firstPlay(select, selected))
    },
    lastPlay: (select, selected) => {
      dispatch(Action.lastPlay(select, selected))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PiecesComponent);
