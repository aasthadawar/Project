import React from 'react';

import  './App.css';
import { BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom';
import Main from './Components/Main/Main';
import Layout from './Components/UI/Layout/Layout';
import FAQ from './Components/FAQ/faq';
import Header from './Components/UI/Header/Header';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Container style={{padding:'0px'}} fluid={true}>
      <Row>
               <Col lg={12}><Header/></Col>
        </Row>
        <Route exact path="/" component={Layout}></Route>
        <Redirect from="/" to="/home" component={Layout}/>
        <Switch>
        <Route path="/home" component={Layout}></Route>
        <Route path="/faq" component={FAQ}></Route>
        </Switch>
       
    
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
