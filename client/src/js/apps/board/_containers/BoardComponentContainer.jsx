import React from 'react';
import { connect } from 'react-redux';
import BoradComponent from '../_components/BoardComponent';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    // firstBoardPieces: state.boardComponent.firstBoardPieces,
    // firstCapturedPieces: state.boardComponent.firstCapturedPieces,
    // lastBoardPieces: state.boardComponent.lastBoardPieces,
    // lastCapturedPieces: state.boardComponent.lastCapturedPieces,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(BoradComponent);
