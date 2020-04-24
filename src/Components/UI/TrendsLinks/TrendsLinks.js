import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import { NavLink } from 'react-router-dom';
import styles from './TrendsLinks.module.css';

const TrendsLinks = () => {
    return (
        <Aux>
            <NavLink exact activeClassName={styles.active} to="/home">Confirmed</NavLink>
            <NavLink exact activeClassName={styles.active} to="/home/recovered">Recovered</NavLink>
            <NavLink exact activeClassName={styles.active} to="/home/death">Deceased</NavLink>
        </Aux>
    );
}

export default TrendsLinks;