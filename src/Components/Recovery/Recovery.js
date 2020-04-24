import React from 'react';
import styles from './Recovery.module.css';
import { connect } from 'react-redux';
import RatioWheel from '../UI/RatioWheel/RatioWheel';
import Aux from '../../hoc/Aux/Aux';
import Spinner from '../UI/Spinner/Spinner';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

const Recovery = (props) => {

    if (props.total === 0 && props.recovered === 0 && props.errorDetails === false) {
        var spinner = (<Spinner />)
    }

    else if (props.total !== 0 && props.recovered !== 0) {
        var total = props.total;
        var recoveredCases = props.recovered;
        var newTotal = (total / 1000).toFixed(1);
        var newRecovered = (recoveredCases / 10000).toFixed(1);
        var recovery = (
            <Aux>
                <p className={styles.RecoveryLabel}>Ratio Of Recovery</p>
                <RatioWheel total={total} recovered={recoveredCases} />
                <div className={styles.CaseLabel}>
                    <p className={styles.newRecoveryDetails}>{newTotal}k Affected</p>
                    <p className={styles.RecoveryDetails}>{newRecovered}k  Recovered</p>
                </div>
            </Aux>
        );
    }

    else if (props.errorDetails === true) {
        var error = <ErrorHandling />;
    }

    return (
        <div className={styles.Recovery}>
            {spinner}
            {error}
            {recovery}
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        total: state.cas.cases.total,
        recovered: state.cas.cases.recovered,
        errorDetails: state.cas.caseError
    }
}

export default connect(mapStateToProps)(Recovery);