import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initCaseDetails } from '../../store/Actions/CasesActions';
import Case from '../Case/Case';
import styles from '../Cases/Cases.module.css';
import Spinner from '../UI/Spinner/Spinner';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

const Cases = React.memo((props) => {
    var myInterval = '';
    var obj = {};

    useEffect(() => {
        props.onShowCaseDetails();

        myInterval = setInterval(() => {

            props.onShowCaseDetails();
        }, 600000)

        return () => {

            clearInterval(myInterval);
        }

    }, [props.onShowCaseDetails])

    if (props.casesDetails.total === 0 && props.casesDetails.active === 0 && props.casesDetails.recovered === 0 && props.casesDetails.deaths === 0 && props.errorDeatils == false) {
        var spinner = (<Spinner />);
    }

    if (props.casesDetails.total !== 0 && props.casesDetails.active !== 0 && props.casesDetails.recovered !== 0 && props.casesDetails.deaths !== 0) {
        obj = props.casesDetails;
        var cases = [];
        for (let key in obj) {
            var newObj = {}
            newObj[key] = obj[key];
            cases.push(newObj);
        }

        var caseData = (
            cases.map(items => {
                for (let value in items) {
                    return (
                        <Case key={value} label={value} details={items[value]} />
                    );
                }
            })
        )

    }

    if (props.errorDeatils === true) {
        var error = <ErrorHandling />;
    }

    return (
        <div className={styles.case}>
            {spinner}
            {error}
            <div className={styles.flex}>
                {caseData}
            </div>

        </div>
    );

})


const mapStateToProps = (state) => {

    return {
        casesDetails: state.cas.cases,
        errorDeatils: state.cas.caseError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowCaseDetails: () => dispatch(initCaseDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cases);