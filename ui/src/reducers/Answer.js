const answer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ANSWER':
      return { ...state, ...action.answer }
    default:
      return state
  }
}

export default answer
