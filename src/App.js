import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import AppLayout from './Layout';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={LoginPage}/>
      <ProtectedRoute exact path="/app" component={AppLayout}/>
      <Route path="*" component={()=>"404 not found"}/>
      </Switch>
    </div>
  );
}

export default App;
