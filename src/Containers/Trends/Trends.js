import React, { PureComponent } from 'react';
import styles from './Trends.module.css';
import TrendsLinks from '../../Components/UI/TrendsLinks/TrendsLinks';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import ConfirmGraph from '../../Components/ConfirmGraph/ConfirmGraph';
import DeathGraph from '../../Components/DeathGraph/DeathGraph';
import RecoveredGraph from '../../Components/RecoveredGraph/RecoveredGraph';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import {initGraphDetails} from '../../store/Actions/GraphActions';
import {connect} from 'react-redux';
import ErrorHandling from '../../Components/ErrorHandling/ErrorHandling';

class Trends extends PureComponent{
    myInterval='';;
    componentDidMount(){
        this.props.onGraphDetails();
        this.myInterval = setInterval(()=>{
            this.props.onGraphDetails();
        },600000)
    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    render(){
        if(this.props.graphDetails){
            if(this.props.graphDetails.length==0 && this.props.graphError==false){
            var spinner = (<Spinner/>);}
            else if(this.props.graphDetails.length!=0){
                var links = (
                    <Aux>
                        <TrendsLinks/>
                    </Aux>
                )
                var heading = (<p className={styles.Label}>Spread Trends</p>)
            }
        }
        if(this.props.graphError==true){
            var error = <ErrorHandling/>
        }
        return(
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
                <Route exact  path="/home/recovered" component={RecoveredGraph}></Route>
                <Route exact path="/home/death" component={DeathGraph}></Route>
                <Route exact path="/home" component={ConfirmGraph}></Route>

                </Switch>
                
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
    return{
        graphDetails:state.graph.graphCases,
        graphError:state.graph.graphError
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onGraphDetails:()=>dispatch(initGraphDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Trends);