const todo = (state = 3, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        1, 2, 3
      ]
    case 'TOGGLE_TODO':
      return {
        eat: "apple",
        play: "ball"
      }
    default:
      return state
  }
}

export default todo