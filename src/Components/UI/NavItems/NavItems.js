import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../NavItems/NavItems.module.css';

const NavItems = () => {
    return (
        <div className={styles.main}>
            <NavLink className={styles.NavItems} activeClassName={styles.active} to="/home">Home</NavLink>
            <NavLink className={styles.NavItems} activeClassName={styles.active} to="/faq">FAQ</NavLink>
            <NavLink className={styles.NavItems} activeClassName={styles.active} to="/helpline">Helpline</NavLink>
        </div>
    );
}

export default NavItems;