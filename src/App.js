import {BrowserRouter,Route}   from  'react-router-dom'
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App=()=>{
    return(
        <div>
          <BrowserRouter>
              <Route path="/register" exact component={Register}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/dashboard" exact component={Dashboard}/>
          </BrowserRouter>
        </div>
    )
}


export default App