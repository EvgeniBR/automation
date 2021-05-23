import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router';
import PanelPage from './pages/PanelPage/PanelPage.component';
import q from './Questions/quiestions.json'
import Header from './components/Header/Header.components';
import Question from './components/Question/Question.component';

function App() {

  return (
    <div>
      <Header data={q} />
      <Switch>
        <Route exact path='/' component={PanelPage} />
        <Route exact path="/questions/:id" component={Question} />
      </Switch>
    </div>
  );
}

export default App;
