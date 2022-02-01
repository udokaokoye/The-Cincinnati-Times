import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import HeaderNav from './Components/HeaderNav/HeaderNav'
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <Router>
      <React.Fragment>
        <Route key={'/'} exact path={'/'}>
          <HeaderNav />
          <Home/>
          <Footer />
        </Route>
      </React.Fragment>
    </Router>
  )
}

export default App

