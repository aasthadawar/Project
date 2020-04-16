import React, { PureComponent } from 'react';
import {initNewCasesDetails} from '../../../store/Actions/NewCasesActions';
import {connect} from 'react-redux';
import axios from 'axios';
import styles from '../NewCases/NewCases.module.css';

class NewCases extends PureComponent{
    state={
        newCases:0
    }
    componentDidMount(){
        axios.get('https://api.thevirustracker.com/free-api?global=stats')
        .then(response=>{
            console.log('$$$$$$$$$$$$$$$$$new case response',response.data.results[0]);
            var details=response.data.results[0]
            this.setState({...this.state,newCases:details.total_new_cases_today})

        })
        .catch(error=>{
            console.log('error',error);
        })
        this.props.onNewCases();
    }
    render(){
        if(this.state.newCases!=0){
            console.log('state enter kar gya hu')
            if(this.props.newCases!=0){
                console.log('props enter kar gya hu')
        var newCase = <div className={styles.date}>{this.props.newCases}</div>}
        else{
            var newCase = <div className={styles.date}>{this.state.newCases}</div>
        }
        }
        
        return(
            <div>{newCase}</div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log(state.newCas.newCases);
    return{
        newCases:state.newCas.newCases
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onNewCases:()=>dispatch(initNewCasesDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCases);