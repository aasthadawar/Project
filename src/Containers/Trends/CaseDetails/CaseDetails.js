import React, { PureComponent } from 'react';
import NewCases from '../NewCases/NewCases';
import {connect} from 'react-redux';


class CaseDetails extends PureComponent{
    
    render(){
        if(this.props.date){
            var newDate = this.props.date.split(',');
            console.log('date',newDate);
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
                <p>CONFIRMED</p>
                {date}
                <p>{this.props.total}</p>
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