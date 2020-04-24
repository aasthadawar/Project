import React from 'react';
import styles from '../Country/Country.module.css';
import Arrow from '../UI/Arrow/Arrow';
const Country = (props) => {
    var affect = "";
    var recover = "";
    var showAffect = "";
    var showRecover = "";
    var active = `${props.total}`;
    var recovered = `${props.recovered}`;
    if (active.split('').length > 3) {
        affect = (props.total / 1000).toFixed(2);
        showAffect = <p className={styles.active}>{affect}k affected</p>
    }

    else {
        affect = props.total;
        showAffect = <p className={styles.active}>{affect} affected</p>
    }

    if (recovered.split('').length > 3) {
        recover = (props.recovered / 1000).toFixed(2);
        showRecover = <p className={styles.recover}>{recover}k recovered</p>
    }

    else {
        recover = props.recovered
        showRecover = <p className={styles.recover}>{recover} recovered</p>
    }

    return (
        <div className={styles.Country}>
            <div>
                <div className={styles.Flex}>
                    <img className={styles.CountryImage} src={props.url} alt="country"></img>
                    <p className={styles.CountryLabel}>{props.name}</p>
                </div>
                <div className={styles.FlexCases}>
                    {showAffect}
                    {showRecover}
                </div>
            </div>
            <Arrow />
        </div>
    );
}

export default Country;