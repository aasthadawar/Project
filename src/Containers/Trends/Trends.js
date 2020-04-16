import React, { PureComponent } from 'react';
import styles from './Trends.module.css';
import TrendsLinks from '../../Components/UI/TrendsLinks/TrendsLinks';

import CaseDetails from './CaseDetails/CaseDetails';

import {Route} from 'react-router-dom';
import ConfirmGraph from '../Trends/ConfirmGraph/ConfirmGraph';
import DeathGraph from '../Trends/DeathGraph/DeathGraph';
import RecoveredGraph from '../Trends/RecoveredGraph/RecoveredGraph';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import {initGraphDetails} from '../../store/Actions/GraphActions';
import {connect} from 'react-redux';


class Trends extends PureComponent{
    state={
        loading:false
    }
    componentDidMount(){
        this.props.onGraphDetails();
        this.setState({...this.state,loading:true});
    }

    render(){
        if(this.state.loading==false){
            var spinner = (<Spinner/>);
        }
        return(
            <div className={styles.trend}>
                {spinner}
                <div className={styles.LabelFlex}>
                    <p className={styles.Label}>Spread Trends</p>
                    <div className={styles.MainLink}>
                        <TrendsLinks/>
                    </div>
                </div>
                <div className={styles.route}>
                <CaseDetails className={styles.caseDetails}/>
                        <div>
                        <Route exact path="/" component={ConfirmGraph}/>
                            <Route path="/home/recovered" component={RecoveredGraph}/>
                            <Route path="/home/death" component={DeathGraph}/>
                        </div>
                </div>

            </div>
        );
    }
}


const mapStateToProps=(state)=>{
    console.log('!!!!!!!!!!state',state.graph.graphCases);
    return{
        graphDetails:state.graph.graphCases
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onGraphDetails:()=>dispatch(initGraphDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Trends);
