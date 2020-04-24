import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Components/UI/Layout/Layout';
import FAQ from './Components/FAQ/faq';
import Header from './Components/UI/Header/Header';
import Col from 'react-bootstrap/Col';
import Helpline from './Components/Helpline/Helpline';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Col lg={12}><Header /></Col>

        <Redirect to="/home" />
        <Switch>
          <Route path="/home" component={Layout}></Route>
          <Route path="/faq" component={FAQ}></Route>
          <Route path="/helpline" component={Helpline}></Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
