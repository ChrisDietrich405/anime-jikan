import React, { useReducer } from "react";
import { initialState, loginReducer } from "../../loginReducer";
import { login } from "../../utils";

const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await login();
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };
  return (
    <div>
      {loggedIn ? (
        <>
          <h1>Welcome {username}</h1>
          <button onClick={() => dispatch({ type: "error" })}>Log out</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="username" onChange={(e) => dispatch({
            type: "field",
            payload: e.target.value
            fieldName: "username"
          })}/>
          <input type="text" placeholder="password" onChange={(e) => dispatch({
            type: "field",
            payload: e.target.value,
            fieldName: "password"
          })}/>
          <button type="submit">login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
