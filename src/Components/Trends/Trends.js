import React, { useEffect } from 'react';
import styles from './Trends.module.css';
import TrendsLinks from '../UI/TrendsLinks/TrendsLinks';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ConfirmGraph from '../ConfirmGraph/ConfirmGraph';
import DeathGraph from '../DeathGraph/DeathGraph';
import RecoveredGraph from '../RecoveredGraph/RecoveredGraph';
import Spinner from '../UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import { initGraphDetails } from '../../store/Actions/GraphActions';
import { connect } from 'react-redux';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

const Trends = React.memo((props) => {
    var myInterval = '';

    useEffect(() => {
        props.onGraphDetails();
        myInterval = setInterval(() => {
            props.onGraphDetails();
        }, 600000)

        return () => {
            clearInterval(myInterval)
        }
    }, [props.onGraphDetails]);



    if (props.graphDetails) {
        if (props.graphDetails.length === 0 && props.graphError === false) {
            var spinner = (<Spinner />);
        }

        else if (props.graphDetails.length !== 0) {
            var links = (
                <Aux>
                    <TrendsLinks />
                </Aux>
            );

            var heading = <p className={styles.Label}>Spread Trends</p>;
        }
    }

    if (props.graphError === true) {
        var error = <ErrorHandling />
    }

    return (
        <div className={styles.trend}>
            {spinner}
            {error}
            <div className={styles.LabelFlex}>
                {heading}
                <div className={styles.MainLink}>
                    {links}
                </div>
            </div>
            <Switch>
                <Route exact path="/home/confirmed" component={ConfirmGraph}></Route>
                <Route exact path="/home/recovered" component={RecoveredGraph}></Route>
                <Route exact path="/home/death" component={DeathGraph}></Route>
                <Route exact path="/home" component={ConfirmGraph}></Route>
            </Switch>
        </div>
    );

})


const mapStateToProps = (state) => {
    return {
        graphDetails: state.graph.graphCases,
        graphError: state.graph.graphError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGraphDetails: () => dispatch(initGraphDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trends);