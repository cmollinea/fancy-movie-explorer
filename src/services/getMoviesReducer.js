export function getMoviesReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, isError: true };
    case "SUCCESS_FETCH":
      return { ...state, isLoading: false, isError: false };
    default:
      throw new Error("Somthing is not working here");
  }
}
