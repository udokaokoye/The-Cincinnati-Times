import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import HeaderNav from './Components/HeaderNav/HeaderNav'
import Footer from './Components/Footer/Footer';
import NewsCategory from './Pages/News Category/NewsCategory';
import NewsPage from './Pages/News Page/NewsPage';
import Auth from './Pages/Auth/Auth';
import AdminAuth from './Pages/Admin/Auth/Auth';
import AdminHome from './Pages/Admin/Admin Home/AdminHome';
import AdminNav from './Pages/Admin/Admin Nav/AdminNav';
import AddPost from './Pages/Admin/Add Post/AddPost';
import AdminNewsCategory from './Pages/Admin/News Category/AdminNewsCategory';
import AllPost from './Pages/Admin/All Post/AllPost'

function App() {
  return (
    <Router>
      <Switch>
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

        <Route exact path={'/:category/story/:slug'}>
          <HeaderNav />
          <NewsPage/>
          <Footer />
        </Route>

        <Route key={'/admin'} exact path={'/admin'}>
          <AdminAuth  />
        </Route>

        <Route key={'/admin/home'} exact path={'/admin/home'}>
          <AdminNav />
          <AdminHome  />
        </Route>

        <Route key={'/admin/addPost'} exact path={'/admin/addPost'}>
          <AdminNav />
          <AddPost  />
        </Route>

        <Route key={'/admin/newsCategories'} exact path={'/admin/newsCategories'}>
          <AdminNav />
          <AdminNewsCategory />
        </Route>

        <Route key={'/admin/allposts'} exact path={'/admin/allposts'}>
          <AdminNav />
          <AllPost />
        </Route>

        
      </React.Fragment>
      </Switch>
    </Router>
  )
}

export default App

