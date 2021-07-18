import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Chat from "./Chat";
import Navbar from "./Navbar";
import './index.css'
import styled from 'styled-components'
import Sidebar from "./Sidebar";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase'
import Login from "./Login";
import Spinner from 'react-spinkit'

function App() {

  const [user,loading] = useAuthState(auth)
  console.log(user)

  if(loading){
    return((
      <AppLoading>
        <AppLoadContent>
          <img src='https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' alt=''></img>
          <Spinner name='ball-spin-fade-loader' color='purple' fadeIn='none' />
        </AppLoadContent>
      </AppLoading>
    ))
  }

  return (
    <div className="App">
      <Router>
        {!user ? <Login /> : (
          <>
          <Navbar />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route exact path='/'>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height:100vh;
`

const AppLoading = styled.div`
display:grid;
place-items: center;
height:100vh;
width: 100%;
`

const AppLoadContent = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;

>img{
  height: 100px;
  padding:20px;
  margin-bottom:40px;
}
`