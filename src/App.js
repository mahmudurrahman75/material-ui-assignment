import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = {'/home'}>
          <Home></Home>
        </Route>
        <Route path = {'/post/:pId'}>
          <PostDetail></PostDetail>
        </Route>
        {/* <Route path = {'/comments/:userId'}>
          <Comments></Comments>
        </Route> */}
        <Route exact path= {'/'}>
          <Home></Home>
        </Route>
        <Route path ={'*'}>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
