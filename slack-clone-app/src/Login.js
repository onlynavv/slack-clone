import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import {auth,provider} from './firebase'

const Login = () => {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src='https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' alt='logo'></img>
                <h1>Sign In to Slack Group</h1>
                <p>slack.com</p>

                <Button onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
background: #f8f8f8;
height: 100vh;
display:grid;
place-items:center;
`

const LoginInnerContainer = styled.div`

padding:100px;
text-align:center;
background-color:white;
border-radius:7px;
box-shadow: 0 1px 3px rgba(1,1,1,0.5);

>img{
    object-fit:contain;
    height:100px;
    margin-bottom:40px;
}

>Button{
    margin-top:50px;
    text-transform:uppercase;
    background-color:#0a8d48 !important;
    color:white;
}
`
