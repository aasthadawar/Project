import React from 'react';
import covidLogo from '../../../assests/images/logo.png';
import styles from '../Logo/Logo.module.css';
const Logo=()=>{
    return(
        <div className={styles.Logo}>
            <a><img src={covidLogo} className={styles.LogoImage} alt="covidLogo"></img></a>
            <p className={styles.LogoText}>COVID'19</p>
        </div>
    );
}

export default Logo;
