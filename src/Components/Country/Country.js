import React from 'react';
import styles from '../Country/Country.module.css';
import Arrow from '../UI/Arrow/Arrow';
const Country=(props)=>{
    //console.log('hi country');
    return(
        <div className={styles.Country}>
            <div>
                <div className={styles.Flex}>
                <img className={styles.CountryImage} src={props.url} alt="country"></img>
                <p className={styles.CountryLabel}>{props.name}</p>
                </div>
                <div className={styles.FlexCases}>
                <p>{props.active} affected</p>
                <p>{props.recovered} recovered</p>
                </div>
            </div>
            <Arrow/>
        </div>
    );
}
export default Country;