import React from 'react';
import Logo from '../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from '../Header/Header.module.css';

const Header=()=>{
    return(
        <div className={styles.Header}>
            <div className={styles.col1}>
                <Logo/>
            </div>
            <div className={styles.col2}>
                <NavItems/>
            </div>
        </div>
    );
}

export default Header;