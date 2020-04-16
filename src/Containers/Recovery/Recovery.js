import React,{PureComponent} from 'react';
import styles from './Recovery.module.css';
import {connect} from 'react-redux';
import RatioWheel from '../../Components/UI/RatioWheel/RatioWheel';
import Aux from '../../hoc/Aux/Aux';
import axios from 'axios';
import Spinner from '../../Components/UI/Spinner/Spinner';

class Recovery extends PureComponent{
    constructor(){
        super();
        this.state={
            total:0,
            recovered:0,
            loading:false
        }
    }

    async componentDidMount(){
       let result = await axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
        .then(response=>{
           console.log('response',response.data.data);
           var caseData=response.data.data;
           this.setState({...this.state,total:caseData.total_cases,recovered:caseData.recovery_cases,loading:true})
        })
    
        .catch(error=>{
            console.log('error is',error)
        })
    }
    render(){
        if(this.state.loading==false){
            var spinner= (<Spinner/>)
        }
        if(this.state.total!==0 && this.state.recovered!==0){
            if(this.props.total!==0 && this.props.recovered!==0){
                console.log('recovery props')
                var total = this.props.total;
                var formattedTotal = parseInt(total.split(',').join(''));
                    var filteredTotal = formattedTotal/10000;
                    console.log('props',filteredTotal.toFixed(1));
                    var totalCases = this.props.total;
                var recoveredCases = this.props.recovered;
                var recovery = (
                    <Aux>
                        <p className={styles.RecoveryLabel}>Ratio Of Recovery</p>
                <RatioWheel total={totalCases} recovered={recoveredCases}/>
                <div className={styles.CaseLabel}>
                    <p  className={styles.RecoveryDetails}>{totalCases} Affected</p>
                    <p className={styles.RecoveryDetails}>{recoveredCases}  Recovered</p>
                </div>
                    </Aux>
                )
            }
            else{
                console.log('recovery state');
                if(this.state.total!=0 && this.state.recovered!=0){
                    console.log('not zero');
                    var total=this.state.total;
                    var formattedTotal = parseInt(total.split(',').join(''));
                    var filteredTotal = formattedTotal/10000;
                    console.log(filteredTotal.toFixed(1));
                    var totalCases = this.state.total;
                    var recoveredCases = this.state.recovered;
                }
                else if(this.state.total==0 && this.state.recovered==0){
                    console.log('zero');
                    var totalCases = this.state.total;
                    var recoveredCases = this.state.recovered;
                }
                var recovery = (
                    <Aux>
                        <p className={styles.RecoveryLabel}>Ratio Of Recovery</p>
                <RatioWheel total={totalCases} recovered={recoveredCases}/>
                <div className={styles.CaseLabel}>
                    <p  className={styles.RecoveryDetails}>{totalCases} Affected</p>
                    <p className={styles.RecoveryDetails}>{recoveredCases} Recovered</p>
                </div>
                
                    </Aux>
                )
            }
        }

        return(
            <div className={styles.Recovery}>
                {spinner}
                {recovery}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        total:state.cas.cases.total,
        recovered:state.cas.cases.recovered
    }
}

export default connect(mapStateToProps)(Recovery);