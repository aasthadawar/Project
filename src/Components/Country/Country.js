import React from 'react';
import styles from '../Country/Country.module.css';
import Arrow from '../UI/Arrow/Arrow';
const Country=(props)=>{
    //console.log('hi country');
    var affect="";
    var recover = "";
    var showAffect = "";
    var showRecover = "";
    if(props.active.split('').length>3 ){
       affect = ((parseInt(props.active.split(',').join('')))/1000).toFixed(2);
       //console.log('#################!!!!! affect',affect,'kkkkk',typeof affect);
       showAffect=  <p className={styles.active}>{affect}k affected</p>
    }
    else{
        affect = parseInt(props.active.split(',').join(''));
        showAffect=  <p className={styles.active}>{affect} affected</p>
    }
    if(props.recovered.split('').length>3){
        recover = ((parseInt(props.recovered.split(',').join('')))/1000).toFixed(2);
        showRecover =  <p className={styles.recover}>{recover}k recovered</p>
  
    }
    else{
        recover = parseInt(props.recovered.split(',').join(''));
        showRecover =  <p className={styles.recover}>{recover} recovered</p>
    }
    return(
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
            <Arrow/>
        </div>
    );
}
export default Country;