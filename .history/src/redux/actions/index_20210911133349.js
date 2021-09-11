import { UPDATE_TYPE, UPDATE_TOTAL_WIN, UPDATE_TOTAL_GAME_PLAY } from "./../constants"

const chooseType = (type) => {
  return {
    action: UPDATE_TYPE,
    payload: type
  }
}

const updateWin = () => {
  return {
    action: UPDATE_TOTAL_WIN
    payload
  }
}


export { chooseType }