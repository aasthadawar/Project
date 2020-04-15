import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../NavItems/NavItems.module.css';
import Aux from '../../../hoc/Aux/Aux';


const NavItems=()=>{
    return(
        <Aux>
            <NavLink className={styles.NavItems} activeClassName={styles.active} exact to="/home">Home</NavLink>
        <NavLink className={styles.NavItems} to="/faq">FAQ</NavLink>
        <NavLink className={styles.NavItems} to="/helpline">Helpline</NavLink>
        </Aux>
    );
}

export default NavItems;