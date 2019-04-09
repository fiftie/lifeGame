export const PieceMovable = (piece, nowRow, nowCol, moveRow, moveCol) => {
  switch(piece) {
    // 空
    case 0:
      return false;
    // 玉
    case 1:
      return isOneSquare(nowRow, nowCol, moveRow, moveCol);
    // 金
    case 2:
      if(!isOneSquare(nowRow, nowCol, moveRow, moveCol)) return false;
      // 左斜め下　&& 右斜め下
      if( nowRow < moveRow && nowCol < moveCol ||
          nowRow < moveRow && nowCol> moveCol) {
        return false;
      }else{
        return true;
      }
    // 銀
    case 3:
      if(!isOneSquare(nowRow, nowCol, moveRow, moveCol)) return false;
      // 左 && 右 && 下
      if( nowRow === moveRow && nowCol < moveCol ||
          nowRow === moveRow && nowCol > moveCol ||
          nowRow < moveRow && nowCol === moveCol) {
        return false;
      }else{
        return true;
      }
    // 桂
    case 4:
      if( nowRow === moveRow+2 && nowCol === moveCol+1 ||
          nowRow === moveRow+2 && nowCol === moveCol-1) {
        return true;
      }else{
        return false;
      }
    // 香
    case 5:
      if( nowRow > moveRow && nowCol === moveCol) {
        return true;
      }else{
        return false;
      }
    // 飛車
    case 6:
      // 縦 && 横
      if( nowRow === moveRow && nowCol !== moveCol ||
          nowRow !== moveRow && nowCol === moveCol) {
        return true;
      }else{
        return false;
      }
    // 角
    case 7:
      // 左斜め上 && 右斜め上　&& 左斜め下 && 右斜め下
      if( nowRow > moveRow && nowCol > moveCol ||
          nowRow > moveRow && nowCol < moveCol ||
          nowRow < moveRow && nowCol > moveCol ||
          nowRow < moveRow && nowCol < moveCol) {
        return true;
      }else{
        return false;
      }
    // 歩
    case 8:
      if(nowRow === moveRow+1 && nowCol === moveCol) {
        return true;
      }else{
        return false;
      }
    default:
      console.assert('error PieceMovable.js');
      return false;
  }
}

const isOneSquare = (nowRow, nowCol, moveRow, moveCol) => {
  const resRow = Math.abs(nowRow - moveRow);
  const resCol = Math.abs(nowCol - moveCol);
  if(resRow < 2 && resCol < 2) {
    return true;
  }else{
    return false;
  };
};