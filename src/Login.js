import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
          alt=""
          className="login_logo"
        />
        <h1>Sign in to Web Development</h1>
        <p>shivansh channel</p>
        <Button onClick={signIn}>Sign in to Google</Button>
      </div>
    </div>
  );
}

export default Login;
