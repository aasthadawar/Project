import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import {NavLink} from 'react-router-dom';
import styles from './TrendsLinks.module.css';

const TrendsLinks=()=>{
    return(
        <Aux>
            <NavLink activeClassName={styles.active} activeStyle={{color:'white'}} to="/">Confirmed</NavLink>
            <NavLink activeClassName={styles.active} activeStyle={{color:'white'}}  to="/recovered">Recovered</NavLink>
            <NavLink activeClassName={styles.active} activeStyle={{color:'white'}}  to="/death">Deceased</NavLink>
        </Aux>
    );
}

export default TrendsLinks;