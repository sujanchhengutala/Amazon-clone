import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue()
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log('this is user=>', authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        }
        )
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })

  }, [])


  return (
    <Router>

      <div className="App">
        <Route exact path='/login'><Login></Login></Route>

        <Switch>

          <Route exact path='/'><Header /><Home /></Route>
          <Route path='/checkout'><Header /><Checkout /></Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
