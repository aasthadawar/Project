import React, { PureComponent } from 'react';
import NewCases from '../NewCases/NewCases';
import {connect} from 'react-redux';
import axios from 'axios';
import styles from '../CaseDetails/CaseDetails.module.css';


class CaseDetails extends PureComponent{
    state={
        total:0,
        date:" "
    }

    componentDidMount(){
        axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
       .then((response)=>{
           var details = response.data.data;
           console.log('data came')
           this.setState({...this.state,date:details.last_update,total:details.total_cases})
       })
       .catch(error=>console.log('error is',error))
       
    }
    
    render(){
        if(this.state.total!=0 && this.state.date!=""){
            var tot;
            if(this.props.date!="" && this.props.total!=0){
                var newDate = this.props.date.split(',');
                tot = this.props.total;
            
            }
            else{
                var newDate = this.state.date.split(',')
                tot = this.state.total;
            }
            var month = newDate[0];
            if(month=='Apr'){
                var formatMonth = 'APRIL';
            }
            console.log('month',month);
            var formatDate = newDate[1].split(' ')[1];
            console.log('formate date',formatDate);
            console.log('final date',formatDate,formatMonth);
            var finalDate = formatDate+" "+formatMonth;
            var date=(<p>{finalDate}</p>)
        }

        return(
            <div>
                <p className={styles.date}>CONFIRMED</p>
                <p className={styles.date}>{date}</p>
                <p className={styles.total}>{tot}</p>
                <NewCases/>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        total:state.cas.cases.total,
        date:state.cas.update
    }
}

export default connect(mapStateToProps)(CaseDetails);