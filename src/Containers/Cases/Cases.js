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
        this.myInterval='';
        this.obj={}
    }
    
      componentDidMount(){
        this.props.onShowCaseDetails();
        this.myInterval = setInterval(()=>{
            console.log('called');
            this.props.onShowCaseDetails()
        },600000)

    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
    render(){
        if(this.props.casesDetails.total==0 && this.props.casesDetails.active==0 && this.props.casesDetails.recovered==0 && this.props.casesDetails.deaths==0){
            var spinner = (<Spinner/>)
        }
    
         if(this.props.casesDetails.total!==0 && this.props.casesDetails.active!==0 && this.props.casesDetails.recovered!==0 && this.props.casesDetails.deaths!==0 ){
                this.obj=this.props.casesDetails;
                //console.log('props')
            this.cases=[];     
            for(let key in this.obj){
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