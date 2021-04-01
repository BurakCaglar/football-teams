const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TEAMS":
      return { ...state, teams: action.payload };
    case "FETCH_PLAYERS":
      return { ...state, players: action.payload };
    default:
      return state;
  }
};

export default reducer;
