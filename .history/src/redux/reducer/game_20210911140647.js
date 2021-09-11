import { UPDATE_TYPE, UPDATE_TOTAL_WIN, UPDATE_TOTAL_GAME_PLAY } from "./../constants"

const game = {
  type: '',
  totalGameWin: 0,
  totalGamePlay: 0,
  totalWhilePlay: 0;
}

export const gameReducer = (state = game, action) => {
  switch (action.type) {
    case UPDATE_TYPE:
      state.type = action.payload
      return { ...state }
    case UPDATE_TOTAL_WIN:
      state.totalGameWin++;
      return { ...state }
    case UPDATE_TOTAL_GAME_PLAY:
      state.totalGamePlay++;
      return { ...state }
    default:
      return { ...state }
  }
}