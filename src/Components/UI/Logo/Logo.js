import React from 'react';
import covidLogo from '../../../assests/images/logo.png';
import styles from '../Logo/Logo.module.css';
const Logo=()=>{
    return(
        <div className={styles.Logo}>
            <img src={covidLogo} className={styles.LogoImage} alt="covidLogo"></img>
            <p className={styles.LogoText}>COVID'19</p>
        </div>
    );
}

export default Logo;
