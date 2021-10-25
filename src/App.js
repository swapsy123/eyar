import React from 'react';
import Header from './Header'
import './App.css';
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from './Chats';
import ChatScreen from "./ChatScreen";
import AccountMenu from './AccountMenu';

function App() {
  return (
    <div className="App">

    <Router>

     <Switch>

     <Route path="/chat/:person">
       <Header backButton="/chats" />
         <ChatScreen />
         </Route>

      <Route path="/chats">
       <Header backButton="/" />
         <Chats />
         </Route>

         <Route path="/profile">
         <Header />
         <AccountMenu/>
         </Route>

         <Route path="/">
       <Header />
         <TinderCards />
         <SwipeButtons />
       </Route>

   </Switch>

 </Router>
    </div>
  );
}

export default App;
