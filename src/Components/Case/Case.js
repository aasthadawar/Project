import React from 'react';
import Graph from '../UI/Graph/Graph';
import styles from '../Case/Case.module.css'
import Arrow from '../UI/Arrow/Arrow';

const Case =(props)=>{
    let caseLabels = '';
    switch(props.label){
        case 'total':
            caseLabels=(
                <div> Total Cases</div>
            )
            break;
        case 'active':
            caseLabels=(
                <div>Active Cases</div>
            )
            break; 
        case 'recovered':
            caseLabels=(
                <div>Recovered</div>
            )
            break;
        case 'deaths':
            caseLabels=(
                <div>Total Death</div>
            )
            break;   

    }
    return(
        <div>
                <h3>{caseLabels}</h3>
                <Arrow label={props.label}/>
            <p>{props.details}</p>
            <Graph label={props.label}/>
        </div>
    );
}

export default Case;