import React from "react";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import * as Components from "./Components";
import "../css/login.css";

function Login() {

  // when signIn is true then login else register
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  
  return (
    <div className="loginregister">
      {/* register */}
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Name" />
          <Components.Input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="E-mail" />
          <Components.Input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
          <Components.Button >Register</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      {/* Login */}
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Login</Components.Title>
          <Components.Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" />
          <Components.Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <Components.Button >Login</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>

          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Hey !</Components.Title>
            <Components.Paragraph>
              Already have an account<br/>
              Click button below to Login
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Login
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hey !</Components.Title>
            <Components.Paragraph>
              Don't have an account<br/>
              Click button below to register
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
            Register
            </Components.GhostButton>
          </Components.RightOverlayPanel>

        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>

    </div>
  );
}

export default Login