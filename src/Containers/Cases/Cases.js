import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {initCaseDetails} from '../../store/Actions/CasesActions';
import Case from '../../Components/Case/Case';
import styles from '../Cases/Cases.module.css';
import axios from 'axios';

class Cases extends PureComponent{
    constructor(){
        super();
        this.cases=[];
        this.state={
            total:0,
            active:0,
            recovered:0,
            deaths:0
        };
        this.obj={}
    }
    componentDidMount(){
        this.props.onShowCaseDetails();
    }

    
    
     UNSAFE_componentWillMount(){
        axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
        .then((response)=>{
            var caseData = response.data.data;
            this.setState({...this.state,total:caseData.total_cases,active:caseData.currently_infected,recovered:caseData.recovery_cases,deaths:caseData.death_cases})
        })
        .catch(error=>console.log('error is',error))
    

    }
    render(){
        if(this.state){
            if(this.props.casesDetails.total!==0 && this.props.casesDetails.active!==0 && this.props.casesDetails.recovered!==0 && this.props.casesDetails.deaths!==0 ){
                this.obj=this.props.casesDetails;
            }
            else{
                this.obj=this.state;
            }
            this.cases=[];     
            for(let key in this.obj){
                var newObj={}
                newObj[key]=this.obj[key];
                this.cases.push(newObj);
            }
            var caseData =   (this.cases.map(items=>{
                for(let value in items){
                    return(
                        <Case key={value} label={value} details={items[value]}/>
                    );
                }
            })) 
        }
         
        return(
            <div className={styles.Case}>
               {caseData}
            </div>
        );
    }
    
}

const mapStateToProps=(state)=>{
    return{
        casesDetails:state.cas.cases
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onShowCaseDetails:()=>dispatch(initCaseDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cases);