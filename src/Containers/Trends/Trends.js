import React, { PureComponent } from 'react';
import styles from './Trends.module.css';
import TrendsLinks from '../../Components/UI/TrendsLinks/TrendsLinks';

import {NavLink,Switch} from 'react-router-dom';

import {Route} from 'react-router-dom';
import ConfirmGraph from '../Trends/ConfirmGraph/ConfirmGraph';
import DeathGraph from '../Trends/DeathGraph/DeathGraph';
import RecoveredGraph from '../Trends/RecoveredGraph/RecoveredGraph';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import {initGraphDetails} from '../../store/Actions/GraphActions';
import {connect} from 'react-redux';


class Trends extends PureComponent{
    componentDidMount(){
        this.props.onGraphDetails();
    }

    render(){
        if(this.props.graphDetails){
            if(this.props.graphDetails.length==0){
            var spinner = (<Spinner/>);}
            else if(this.props.graphDetails.length!=0){
                var links = (
                    <Aux>
                   <NavLink exact activeClassName={styles.active} to="/home">Confirmed</NavLink>
                        <NavLink exact activeClassName={styles.active} to="/home/recovered">Recovered</NavLink>
                       <NavLink exact activeClassName={styles.active} to="/home/death">Deceased</NavLink>
                    </Aux>
                )
            }
        }
        return(
            <div className={styles.trend}>
                {spinner}
                <div className={styles.LabelFlex}>
                    <p className={styles.Label}>Spread Trends</p>
                    <div className={styles.MainLink}>
                        {links}
                    </div>
                </div>
                <Switch>
                <Route exact path="/home/confirmed" component={ConfirmGraph}></Route>
                <Route exact  path="/home/recovered" component={RecoveredGraph}></Route>
                <Route exact path="/home/death" component={DeathGraph}></Route>
                <Route exact path="/home" component={ConfirmGraph}></Route>

                </Switch>
                
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