
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import  styles from '../RatioWheel/RatioWheel.module.css';
import {connect} from 'react-redux';


const RatioWheel=(props)=>{
    
       if(props.total!=0){
        //console.log('props',props);
        var total= props.total;
        var recovered=props.recovered;
        var formattedTotal= parseInt(total);
        var formattedRecovered = parseInt(recovered);
        //console.log('formattedtotal',formattedTotal);
        //console.log('formattedrecovered',formattedRecovered)
        var percentage=formattedRecovered/formattedTotal;
        //console.log(typeof percentage);
        var finalPercentage = percentage*100;
        var formattedPercentage= finalPercentage.toFixed(1);
        //console.log('percentage',formattedPercentage);
        
       }
       else{
           var formattedPercentage = 0;
       }
       
    return (
    <div className={styles.Wheel}>
        <CircularProgressbar  value={formattedPercentage} text={`${formattedPercentage}%`} />
    </div>
    );
}


export default RatioWheel;