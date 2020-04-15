import React, { PureComponent } from 'react';
import {initNewCasesDetails} from '../../../store/Actions/NewCasesActions';
import {connect} from 'react-redux';

class NewCases extends PureComponent{
    componentDidMount(){
        this.props.onNewCases();
    }
    render(){
        return(
            <div>{this.props.newCases}</div>
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