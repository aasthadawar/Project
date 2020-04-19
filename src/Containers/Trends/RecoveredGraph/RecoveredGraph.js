import React,{Component} from 'react'
import { LineChart} from 'react-chartkick';
import {connect} from 'react-redux';
import 'chart.js';
import Aux from '../../../hoc/Aux/Aux';


import axios from 'axios';
import Spinner from '../../../Components/UI/Spinner/Spinner';





class DeathGraph extends Component{
    result={
        recovered: {},
    }
    newObj={}
    componentDidMount(){
       
    }
    
    render(){
        if(this.props.graphDetails){
            if(this.props.graphDetails.length==0){
                var spinner = <Spinner/>
            }
                    
        else if(this.props.graphDetails.length!=0)
            {   console.log('recovered &&&&&&&&&&&');
                console.log('######## props',this.props.graphDetails);
                this.props.graphDetails.forEach((countryObj) => {
                    Object.keys(countryObj.timeline.cases).forEach((date)=> {
                        this.result.recovered[date] = (this.result.recovered[date] || 0) + countryObj.timeline.recovered[date];
                    });
                 });
                 console.log('$$$$$$ props mei recovered',this.result.recovered);
                 var obj = this.result.recovered;
                 var newKey="";
             for(var key in obj){
                newKey=`"${key}"`;
                this.newObj[newKey]=obj[key];
                // console.log('key',this.newObj)
             }
             console.log('*********** props formed recovered',this.newObj);
            
            var chart = <LineChart  width="400px" height="150px" colors={["#FF0000"]} data={this.newObj} />
        }
            
    }
        return(
        <Aux>
            {spinner}
            <p>recover</p>
            {chart}
        </Aux>
        );
    }
}

const mapStateToProps=(state)=>{
    //console.log('**************** death graph hu mai',state.graph.graphCases);
    return{
        graphDetails:state.graph.graphCases
    }
}



export default connect(mapStateToProps)(DeathGraph);