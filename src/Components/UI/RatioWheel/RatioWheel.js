
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import  styles from '../RatioWheel/RatioWheel.module.css';

const RatioWheel=(props)=>{
    
       if(props.total!=0){
        var total= props.total;
        var recovered=props.recovered;
        var formattedTotal= parseInt(total);
        var formattedRecovered = parseInt(recovered);
        var percentage=formattedRecovered/formattedTotal;
        var finalPercentage = percentage*100;
        var formattedPercentage= finalPercentage.toFixed(1);
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