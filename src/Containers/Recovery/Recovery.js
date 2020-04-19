import React,{PureComponent} from 'react';
import styles from './Recovery.module.css';
import {connect} from 'react-redux';
import RatioWheel from '../../Components/UI/RatioWheel/RatioWheel';
import Aux from '../../hoc/Aux/Aux';
import axios from 'axios';
import Spinner from '../../Components/UI/Spinner/Spinner';

class Recovery extends PureComponent{
    render(){
        if(this.props.total==0 && this.props.recovered==0){
            var spinner= (<Spinner/>)
        }
         else  if(this.props.total!==0 && this.props.recovered!==0){
               // console.log('recovery props')
                var total = this.props.total;
                //console.log('!!!!!!!!!!!!!!!!!!@@@@@@@@@',typeof total)
                var recoveredCases = this.props.recovered;
                var newTotal = (total/1000).toFixed(1);
                var newRecovered = (recoveredCases/10000).toFixed(1);
                var recovery = (
                    <Aux>
                        <p className={styles.RecoveryLabel}>Ratio Of Recovery</p>
                <RatioWheel total={total} recovered={recoveredCases}/>
                <div className={styles.CaseLabel}>
                    <p  className={styles.newRecoveryDetails}>{newTotal}k Affected</p>
                    <p className={styles.RecoveryDetails}>{newRecovered}k  Recovered</p>
                </div>
                    </Aux>
                )
            }
            

        return(
            <div className={styles.Recovery}>
                {spinner}
                {recovery}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        total:state.cas.cases.total,
        recovered:state.cas.cases.recovered
    }
}

export default connect(mapStateToProps)(Recovery);