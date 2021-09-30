import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Culture from './components/Culture/Culture';




function App() {
  return (


    <div className="App">

      <BrowserRouter>
        <Header></Header>

        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetails></FriendDetails>
          </Route>
          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>

      </BrowserRouter>


    </div>
  );
}

export default App;
