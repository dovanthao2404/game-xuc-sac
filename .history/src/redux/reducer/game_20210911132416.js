const game = {
  type: '',
  totalSuccess: 0,
  totalGamePlay: 0,
}
export const gameReducer = (state = game, action) => {
  switch (action.type) {
    case UPDATE_TYPE:
      return { ...state }
    default: return { ...satate }
  }
}