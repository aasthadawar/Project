import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {initCaseDetails} from '../../store/Actions/CasesActions';
import Case from '../../Components/Case/Case';
import styles from '../Cases/Cases.module.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from '../../Components/UI/Spinner/Spinner';
import ErrorHandling from '../../Components/ErrorHandling/ErrorHandling';

class Cases extends PureComponent{
    constructor(){
        super();
        this.myInterval='';
        this.obj={}
    }
    
    componentDidMount()
    {
        this.props.onShowCaseDetails();
        this.myInterval = setInterval(()=>{
            this.props.onShowCaseDetails()
        },600000)

    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
    render(){
        if(this.props.casesDetails.total==0 && this.props.casesDetails.active==0 && this.props.casesDetails.recovered==0 && this.props.casesDetails.deaths==0 && this.props.errorDeatils==false)
        {
            var spinner = (<Spinner/>)
        }
    
        if(this.props.casesDetails.total!==0 && this.props.casesDetails.active!==0 && this.props.casesDetails.recovered!==0 && this.props.casesDetails.deaths!==0 )
        {
            this.obj=this.props.casesDetails;
            this.cases=[];     
            for(let key in this.obj)
            {
                var newObj={}
                newObj[key]=this.obj[key];
                this.cases.push(newObj);
            }
            
            var caseData =(
                this.cases.map(items=>{
                    for(let value in items){
                        return(
                            <Col className={styles.col} key={value}><Case key={value} label={value} details={items[value]}/></Col>
                        );
                    }
                })
            ) 
        
        }
        if(this.props.errorDeatils==true){
            var error = <ErrorHandling />
        }
        return(
           
              
                <div className={styles.case}>
                <Row>
                {spinner}
                {caseData}
                {error} 
                </Row>
                
           
        </div>
        
               
            
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        casesDetails:state.cas.cases,
        errorDeatils:state.cas.caseError,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onShowCaseDetails:()=>dispatch(initCaseDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cases);