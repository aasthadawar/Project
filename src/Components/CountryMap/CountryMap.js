import React from 'react';
import styles from './CountryMap.module.css';

const CountryMap=()=>{
    return(
        <div className={styles.colorMain}>
            <h3 className={styles.label}>COVID-19 AFFECTED AREAS</h3>
            <div className={styles.color}>
            <p ><span className={styles.more}></span>most affected</p>
            <p><span className={styles.less}></span>less affected</p>
            </div>
        </div>
    );
}

export default CountryMap;