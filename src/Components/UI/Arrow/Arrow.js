import React from 'react';
import upArrow from '../../../assests/images/Up.png';
import downArrow from '../../../assests/images/Down.png';


const Arrow=(props)=>{
          var  caseArrow=(<img src={upArrow}></img>)
        
    
    return(
        <div>
            {caseArrow}
        </div>
    )
    
    }

export default Arrow;