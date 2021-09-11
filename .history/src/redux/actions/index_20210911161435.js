import { UPDATE_TYPE, UPDATE_TOTAL_WIN, UPDATE_TOTAL_GAME_PLAY, UPDATE_TOTAL_WHILE_PLAY, PLAY_GAME } from "./../constants"
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

const updateTotalWhilePlay = (data) => {
  return {
    type: UPDATE_TOTAL_WHILE_PLAY,
    payload: data
  }
}

cosnt playGame = () => {
  return {
    type: PLAY_GAME
  }
}
export { chooseType, updateWin, updateTotalGamePlay, updateTotalWhilePlay }