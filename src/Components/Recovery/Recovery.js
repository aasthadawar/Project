import React from 'react';
import styles from '../Recovery/Recovery.module.css';
import {connect} from 'react-redux';
import RatioWheel from '../UI/RatioWheel/RatioWheel';
import Aux from '../../hoc/Aux/Aux';


const Recovery=(props)=>{
    if(props.active && props.recovered){
        var recovery = (
            <div className={styles.Recovery}>
                <h3>Ratio of Recovery</h3>
                <RatioWheel/>
                <p><span className={styles.RecoveryLabel}>{props.active} affected</span><span>{props.recovered} recovered</span></p>
            </div>
            )
    }
    return(
       <div>
           {recovery}
       </div>
            
        
    );
}

const mapStateToProps=(state)=>{
    //console.log('recovery',state.cas.cases);
    return{
        recovered:state.cas.cases.recovered,
        active:state.cas.cases.active
    }
}

export default connect(mapStateToProps)(Recovery);