import React from 'react';
import Home from './Home' 
import PostList from './components/PostList'
import UserList from './components/UserList'
import PostShow from './components/PostShow'
import UserShow from './components/UserShow'
import {BrowserRouter, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Link to = "/" >Home |</Link>
         <Link to = "/users"> Users |</Link>
         <Link to = "/posts"> Posts </Link>

         <Route exact path = "/" component = { Home }/>
         <Route exact path = "/users" component = { UserList} />
         <Route path = "/users/:id" component = { UserShow } />
         <Route exact path = "/posts" component = { PostList } />
         <Route  path = "/posts/:id" component = { PostShow } />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
