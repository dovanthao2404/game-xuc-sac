import { UPDATE_TYPE, UPDATE_TOTAL_WIN, UPDATE_TOTAL_GAME_PLAY, UPDATE_TOTAL_WHILE_PLAY } from "./../constants"
const chooseType = (type) => {
  return {
    type: UPDATE_TYPE,
    payload: type
  }
}

const updateWin = () => {
  return {
    type: UPDATE_TOTAL_WIN,
  }
}


const updateTotalGamePlay = () => {
  return {
    type: UPDATE_TOTAL_GAME_PLAY,
  }
}

const updateTotalWhilePlay = () => {
  return {
    type: UPDATE_TOTAL_WHILE_PLAY
  }
}
export { chooseType, updateWin, updateTotalGamePlay }