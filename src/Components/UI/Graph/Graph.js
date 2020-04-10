import React from 'react';
import activeGraph from '../../../assests/images/agraph.png';
import totalGraph from '../../../assests/images/tgraph.png';
import deathGraph from '../../../assests/images/dgraph.png';
import recoveredGraph from '../../../assests/images/rgraph.png';


const Graph=(props)=>{
    let caseGraph='';
    switch(props.label){
        case 'total':
            caseGraph=(
                <img src={totalGraph} alt="totalGraph"></img>
            )
            break;
        case 'active':
            caseGraph=(
                <img src={activeGraph} alt="activeGraph"></img>
            )
            break; 
        case 'recovered':
            caseGraph=(
                <img src={recoveredGraph} alt="recoveredGraph"></img>
            )
            break;
        case 'deaths':
            caseGraph=(
                <img src={deathGraph} alt="deathsGraph"></img>
            )
            break;   

    }
    return(
        <div>
            {caseGraph}
        </div>
    )
    
}

export default Graph;