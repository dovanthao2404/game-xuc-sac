import { UPDATE_TYPE, UPDATE_TOTAL_WIN, UPDATE_TOTAL_GAME_PLAY } from "./../constants"

const game = {
  type: '',
  totalGameWin: 0,
  totalGamePlay: 0,
}

export const gameReducer = (state = game, action) => {
  switch (action.type) {
    case UPDATE_TYPE:
      const temp = { ...state }
      temp.type = action.paylaod
      return { ...state }
    case UPDATE_TOTAL_WIN:
      return { ...state }
    case UPDATE_TOTAL_GAME_PLAY:
      return { ...state }
    default:
      return { ...state }
  }
}