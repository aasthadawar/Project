import React,{PureComponent} from 'react';
import styles from './Recovery.module.css';
import {connect} from 'react-redux';
import RatioWheel from '../../Components/UI/RatioWheel/RatioWheel';
import Aux from '../../hoc/Aux/Aux';
import Spinner from '../../Components/UI/Spinner/Spinner';
import ErrorHandling from '../../Components/ErrorHandling/ErrorHandling';

class Recovery extends PureComponent{
    render(){
        if(this.props.total==0 && this.props.recovered==0 && this.props.errorDetails==false){
            var spinner= (<Spinner/>)
        }
         else if(this.props.total!==0 && this.props.recovered!==0){
                var total = this.props.total;
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
            else if(this.props.errorDetails==true){
                var error = <ErrorHandling/>
            }
            

        return(
            <div className={styles.Recovery}>
                {spinner}
                {error}
                {recovery}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        total:state.cas.cases.total,
        recovered:state.cas.cases.recovered,
        errorDetails:state.cas.caseError
    }
}

export default connect(mapStateToProps)(Recovery);