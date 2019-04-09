import React from 'react';
import styled from 'styled-components';

export const PiecesWrapper = styled.div`
  width: 684px;
  height: 755.1px;
  margin: 23px auto;
`

export const PiecesRow = styled.div`
  display: flex;
  width: 684px;
  height: 83.9px;
`

export const Piece = styled.div`
  width:76px;
  height: 83.9px;
  :hover {
    background-color: ${props => props.isSelect ? `rgba(250, 234, 234, 0.8)`:`rgba(202, 219, 240, 0.8)`};
  }
  background-color: ${props => props.isSelect && `rgba(250, 234, 234, 0.8)`};
`

export const PieceImg = styled.img`
  width: 64px;
  margin-left: 6px;
  margin-right: 6px;
  transform: ${props => props.isReverse && `scale(1, -1)`};
`