export function reducer(state, action) {
    switch (action.type) {
      case "numberAdd2":
        return { ...state, number: state.number + 2 };
      case "login":
        return { ...state, user: { name: action.payload } };
      case "multiplyBy7":
        return { ...state, number: state.number * 7 };
      case "divideBy25":
        return { ...state, number: parseFloat(state.number / 25) };
      case "parseInt":
        return { ...state, number: parseInt(state.number) };
      case "setNumber":
          return {...state, number: action.payload}
      default:
        return state;
    }
  }