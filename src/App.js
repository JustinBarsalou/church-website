import './App.css';
import React, {Component} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutUs from './components/AboutUs';
import Services from './components/Services'
import News from './components/News'
import Photos from './components/Photos'
import HowToFindUs from './components/HowToFindUs'
import SundayServiceStream from './components/SundayServiceStream'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>
          
          <Route path='/' exact render={
            ()=> {
              return (
                <Home></Home>
  
              )
            }
          }/>
          <Route path='/AboutUs' render={
            ()=> {
              return (
                <AboutUs></AboutUs>
  
              )
            }
          }/>
          <Route path='/Services' render={
            ()=> {
              return (
                <Services></Services>
  
              )
            }
          }/>
          <Route path='/News' render={
            ()=> {
              return (
                <News></News>
  
              )
            }
          }/>
          <Route path='/Photos' render={
            ()=> {
              return (
                <Photos></Photos>
  
              )
            }
          }/>
        </div> 
        <Route path='/HowToFindUs' render={
            ()=> {
              return (
                <HowToFindUs></HowToFindUs>
  
              )
            }
          }/>
          <Route path='/SundayServiceStream' render={
            ()=> {
              return (
                <SundayServiceStream></SundayServiceStream>
  
              )
            }
          }/>
      </Router>
    );

  }
}

export default App;
