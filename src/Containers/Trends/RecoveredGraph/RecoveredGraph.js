import React,{Component} from 'react'
import { LineChart} from 'react-chartkick';
import {connect} from 'react-redux';
import 'chart.js';


import axios from 'axios';
import Spinner from '../../../Components/UI/Spinner/Spinner';





class DeathGraph extends Component{
    result={
        cases: {},
            deaths: {},
            recovered: {}
    }
    newObj={}
    state={
        line:false
    }
    componentDidMount(){
       

        axios.get("https://corona.lmao.ninja/v2/historical").
        then(response=>{
            var data = response.data;
            data.forEach((countryObj) => {
                Object.keys(countryObj.timeline.cases).forEach((date)=> {
                    this.result.recovered[date] = (this.result.recovered[date] || 0) + countryObj.timeline.recovered[date];
                });
             });
             console.log('result',this.result);
             var obj = this.result.recovered;
             console.log("*********  prev",this.result.recovered);
             var newKey="";
             for(var key in obj){
                newKey=`"${key}"`;
                this.newObj[newKey]=obj[key];
                // console.log('key',this.newObj)
             }
             console.log('*********** obj formed',this.newObj);
             //var newdata = {...this.newObj};
           //console.log('datta',newdata);
           this.setState({...this.state,line:true})
           
            })
            .catch(error=>console.log(error))
            
    }
    
    render(){
        if(this.line==false){
            var spinner = <Spinner/>
        }
        if(this.props.graphDetails){
            if(this.props.graphDetails.length!=0)
            {
                console.log('######## props',this.props.graphDetails.length);
                this.props.graphDetails.forEach((countryObj) => {
                    Object.keys(countryObj.timeline.cases).forEach((date)=> {
                        this.result.recovered[date] = (this.result.recovered[date] || 0) + countryObj.timeline.deaths[date];
                    });
                 });
                 console.log('$$$$$$ props mei',this.result.recovered);
                 var obj = this.result.recovered;
                 var newKey="";
             for(var key in obj){
                newKey=`"${key}"`;
                this.newObj[newKey]=obj[key];
                // console.log('key',this.newObj)
             }
             console.log('*********** props formed',this.newObj);
            }
        }
           //var data = {...this.newObj};
          // console.log('datta',data);
          if(this.state.line==true){
              var chart = <LineChart  width="400px" height="150px" colors={["#FF0000"]} data={this.newObj} />
          }
            
        
        return(
        <div>
            {spinner}
            {chart}
        </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log('**************** death graph hu mai',state.graph.graphCases);
    return{
        graphDetails:state.graph.graphCases
    }
}



export default connect(mapStateToProps)(DeathGraph);