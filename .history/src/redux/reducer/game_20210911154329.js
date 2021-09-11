import { UPDATE_TYPE, UPDATE_TOTAL_WIN, UPDATE_TOTAL_GAME_PLAY, UPDATE_TOTAL_WHILE_PLAY } from "./../constants"

const game = {
  type: true,
  totalGameWin: 0,
  totalGamePlay: 0,
  totalWhilePlay: 0,
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 1, hinhAnh: "./img/1.png" },
  ]
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
    case UPDATE_TOTAL_WHILE_PLAY:
      state.totalWhilePlay = action.payload
      return { ...state }
    default:
      return { ...state }
  }
}