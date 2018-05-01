const countDown = (state = false, action) => {
  switch (action.type) {
    case 'SET_COUNTDOWN':
      return action.status
    default:
      return state
  }
}

export default countDown
