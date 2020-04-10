import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../NavItems/NavItems.module.css';

const NavItems=()=>{
    return(
        <div className={styles.Nav}>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/helpful_link" >Helpful Links</NavLink>
        </div>
    );
}

export default NavItems;