import { UPDATE_TYPE } from "./../constants"

const game = {
  type: '',
  totalGameWin: 0,
  totalGamePlay: 0,
}

export const gameReducer = (state = game, action) => {
  switch (action.type) {
    case UPDATE_TYPE:
      return { ...state }
    case
    default: return { ...state }
  }
}