import React from 'react';
import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  width: 1400px;
  height: 800px;
  justify-content: space-between;
`

export const PieceBoardLeft = styled.div`
  width: 300px;
  height: 300px;
  background-color: #cba665;
`

export const PieceBoardRight = styled.div`
  width: 300px;
  height: 300px;
  background-color: #cba665;
  margin-top: 500px;
`

export const Board = styled.div`
  width: 735px;
  height: 800px;
  background-image: url('media/board/syougi_ban.png');
`