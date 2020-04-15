import React,{Component} from 'react';
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js';
import axios from 'axios';


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
                    this.result.cases[date] = (this.result.cases[date] || 0) + countryObj.timeline.cases[date];
                    this.result.deaths[date] = (this.result.deaths[date] || 0) + countryObj.timeline.deaths[date];
                    this.result.recovered[date] = (this.result.recovered[date] || 0) + countryObj.timeline.recovered[date];
                });
             });
             console.log('result',this.result);
             var obj = this.result.deaths;
             
             var newKey="";
             for(var key in obj){
                newKey=`"${key}"`;
                this.newObj[newKey]=obj[key];
                // console.log('key',this.newObj)
             }
             //var newdata = {...this.newObj};
           //console.log('datta',newdata);
           this.setState({...this.state,line:true})
           
            })
            .catch(error=>console.log(error))
            
    }
    
    render(){
        
            console.log('cases',this.result.deaths);
           //var data = {...this.newObj};
          // console.log('datta',data);
          if(this.state.line===true){
              var chart = <LineChart  width="400px" height="200px" xtitle="Time" ytitle="Population" colors={["#FF0000"]} data={this.newObj} />
          }
            
        
        return(
        <div>
            {chart}
        </div>
        );
    }
}

export default DeathGraph;