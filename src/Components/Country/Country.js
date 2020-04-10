import React from 'react';
import styles from '../Country/Country.module.css';
const Country=(props)=>{
    //console.log('hi country');
    return(
        <div className={styles.Country}>
            <p>{props.name}</p>
            <p>{props.active} affected</p>
            <p>{props.recovered} recovered</p>
            <img className={styles.CountryImage} src={props.url} alt="country"></img>
        </div>
    );
}

export default Country;