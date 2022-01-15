import {BrowserRouter,Route}   from  'react-router-dom'
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

const App=()=>{
    return(
        <div>
           
          <BrowserRouter>
           
              <Route path="/register" exact component={Register}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/dashboard" exact component={Dashboard}/>
              <Route path="/home" exact component={Home}/>
          </BrowserRouter>
        </div>
    )
}


export default App