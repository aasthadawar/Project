import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import { Route } from 'react-router-dom';
import FAQ from '../FAQ/faq';
import Layout from '../UI/Layout/Layout';
import RecoveredGraph from '../../Containers/Trends/RecoveredGraph/RecoveredGraph';
import DeathGraph from '../../Containers/Trends/DeathGraph/DeathGraph';


const Main=()=>{
    return(
       <Aux>
           <Route exact path="/" component={Layout}></Route>
           <Route path="/faq" component={FAQ}></Route>
           
       </Aux>
    );
}

export default Main;