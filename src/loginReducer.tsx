export const initialState = {
  password: "",
  username: "",
  error: "",
  isLoading: false,
  isLoggedIn: false,
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "field": 
    return { ...state, [action.fieldName]: action.payload}
    case "login":
      return { ...state, isLoading: true, error: "" };
    case "logout":
        return { ...state, isLoggedIn: false}
    case "success":
      return { ...state, isLoggedIn: true, isLoading: false };
    case "error":
      return {
        ...state,
        error: "big problems",
        isLoading: false,
        username: "",
        password: "",
      };
    default:
      return state;
  }
};
