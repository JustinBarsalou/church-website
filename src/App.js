import './App.css';
import Home from './components/Home'
import React, {Component} from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>
          
          
          <Route path='/' render={
            ()=> {
              return (
                <Home></Home>
  
              )
            }
          }/>
        </div> 
      </Router>
    );

  }
}

export default App;
