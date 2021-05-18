import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router';
import PanelPage from './pages/PanelPage/PanelPage.component';


function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={PanelPage} />
      </Switch>
    </div>
  );
}

export default App;
