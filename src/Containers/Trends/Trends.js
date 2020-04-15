import React, { PureComponent } from 'react';
import styles from './Trends.module.css';
import TrendsLinks from '../../Components/UI/TrendsLinks/TrendsLinks';

import CaseDetails from './CaseDetails/CaseDetails';

import {Route} from 'react-router-dom';
import ConfirmGraph from '../Trends/ConfirmGraph/ConfirmGraph';
import DeathGraph from '../Trends/DeathGraph/DeathGraph';
import RecoveredGraph from '../Trends/RecoveredGraph/RecoveredGraph';


class Trends extends PureComponent{

    render(){
        return(
            <div>
            <div className={styles.LabelFlex}>
                <p className={styles.Label}>Spread Trends</p>
                <div className={styles.MainLink}>
                    <TrendsLinks/>
                </div>
            </div>
                    <CaseDetails/>
                    <div>
                        <Route exact path="/" component={ConfirmGraph}/>
                        <Route path="/recovered" component={RecoveredGraph}/>
                        <Route path="/death" component={DeathGraph}/>
                    </div>
            </div>
        );
    }
}
export default Trends;