import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import {NavLink} from 'react-router-dom';
import styles from './TrendsLinks.module.css';

const TrendsLinks=()=>{
    return(
        <Aux>
            <NavLink exact activeClassName={styles.active} activeStyle={{color:'white'}} to="/">Confirmed</NavLink>
            <NavLink activeClassName={styles.active} activeStyle={{color:'white'}}  to="/home/recovered">Recovered</NavLink>
            <NavLink activeClassName={styles.active} activeStyle={{color:'white'}}  to="/home/death">Deceased</NavLink>
        </Aux>
    );
}

export default TrendsLinks;