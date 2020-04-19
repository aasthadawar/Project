import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import {NavLink} from 'react-router-dom';
import styles from './TrendsLinks.module.css';

const TrendsLinks=()=>{
    return(
        <Aux>
            <NavLink exact activeClassName={styles.active} to="/">Confirmed</NavLink>
            <NavLink activeClassName={styles.active}  to="/recovered">Recovered</NavLink>
            <NavLink activeClassName={styles.active}   to="/death">Deceased</NavLink>
        </Aux>
    );
}

export default TrendsLinks;