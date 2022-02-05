import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import HeaderNav from './Components/HeaderNav/HeaderNav'
import Footer from './Components/Footer/Footer';
import NewsCategory from './Pages/News Category/NewsCategory';
import NewsPage from './Pages/News Page/NewsPage';
import Auth from './Pages/Auth/Auth';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route key={'/'} exact path={'/'}>
          <HeaderNav />
          <Home/>
          <Footer />
        </Route>

        <Route key={'/auth'} exact path={'/auth'}>
          <Auth/>
        </Route>

        <Route key={'/category'} exact path={'/category/:category'}>
          <HeaderNav />
          <NewsCategory/>
          <Footer />
        </Route>

        <Route key={'/:category/:slug'} exact path={'/:category/:slug'}>
          <HeaderNav />
          <NewsPage/>
          <Footer />
        </Route>

        
      </React.Fragment>
    </Router>
  )
}

export default App

