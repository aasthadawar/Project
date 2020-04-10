import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {initCaseDetails} from '../../store/Actions/CasesActions';
import Case from '../../Components/Case/Case';
import styles from '../Cases/Cases.module.css'


class Cases extends PureComponent{
    constructor(){
        super();
        this.cases=[];
    }
    componentDidMount(){
        this.props.onShowCaseDetails();
    }


    
    render(){
        console.log('case render',this.props.casesDetails);
        if(this.props.casesDetails){
            //console.log('obje',this.props.casesDetails);
            this.cases=[];
            var obj=this.props.casesDetails;
            //console.log('cases details',obj);
            for(let key in obj){
                var newObj={}
                
                    newObj[key]=obj[key];
                    this.cases.push(newObj);
                }
            //console.log('array',this.cases);
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
    console.log('map states',state.cas.cases);
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