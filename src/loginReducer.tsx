interface IInitialState {
  password: string;
  username: string;
  error: string;
  isLoggedIn: boolean;
  isLoading: boolean;
}

interface IAction {
  type: string;
  payload: any;
  fieldName: string;
}

export const initialState = {
  password: "",
  username: "",
  error: "",
  isLoggedIn: "",
  isLoading: "",
};

export const loginReducer = (state: IInitialState, action: IAction) => {
  switch (action.type) {
    case "field":
      return { ...state, [action.fieldName]: action.payload };
    case "login":
      return { ...state, isLoading: true, error: "" };
    case "success":
      return { ...state, isLoggedIn: true, isLoading: false };
    case "error":
      return { ...state, error: "big problems", username: "", password: "" };
    default:
      return state;
  }
};
