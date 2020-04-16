import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {initCaseDetails} from '../../store/Actions/CasesActions';
import Case from '../../Components/Case/Case';
import styles from '../Cases/Cases.module.css';
import axios from 'axios';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Spinner from '../../Components/UI/Spinner/Spinner';

class Cases extends PureComponent{
    constructor(){
        super();
        this.cases=[];
        this.state={
            total:0,
            active:0,
            recovered:0,
            deaths:0,
            loading:false
        };
        this.obj={}
    }
    
      componentDidMount(){
         axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
        .then((response)=>{
            var caseData = response.data.data;
            console.log('data came')
            this.setState({...this.state,total:caseData.total_cases,active:caseData.currently_infected,recovered:caseData.recovery_cases,deaths:caseData.death_cases,loading:true})
        })
        .catch(error=>console.log('error is',error))
        
        this.props.onShowCaseDetails();

    }
    render(){
        if(this.state.loading==false){
            var spinner = (<Spinner/>)
        }
        if(this.state.total!==0 && this.state.active!==0 && this.state.recovered!==0 && this.state.deaths!==0){
            if(this.props.casesDetails.total!==0 && this.props.casesDetails.active!==0 && this.props.casesDetails.recovered!==0 && this.props.casesDetails.deaths!==0 ){
                this.obj=this.props.casesDetails;
                console.log('props')
            }
            else{
                this.obj=this.state;
                console.log('state')
            }
            this.cases=[];     
            for(let key in this.obj){
                if(key=='loading'){
                    continue;
                }
                var newObj={}
                newObj[key]=this.obj[key];
                this.cases.push(newObj);
            }
            var caseData =   (this.cases.map(items=>{
                for(let value in items){
                    return(
                        <Col className={styles.col} key={value}><Case key={value} label={value} details={items[value]}/></Col>
                    );
                }
            })) 
        }
         
        return(
            <div className={styles.case}>
                <Row >
                    {spinner}
                   {caseData} 
                </Row>
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