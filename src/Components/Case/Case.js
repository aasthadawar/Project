import React from 'react';
import Graph from '../UI/Graph/Graph';
import styles from '../Case/Case.module.css'
import Arrow from '../UI/Arrow/Arrow';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import upArrow from '../../assests/images/Up.png'
import downArrow from '../../assests/images/Down.png';

const Case =(props)=>{
  
        let caseLabels = '';
    switch(props.label){
        case 'total':
            caseLabels=(
                <div className={styles.Labels}> Total Cases<img src={upArrow}></img></div>
            )
            break;
        case 'active':
            caseLabels=(
                <div className={styles.Labels}>Active Cases<img src={upArrow}></img></div>
            )
            break; 
        case 'recovered':
            caseLabels=(
                <div className={styles.Labels}>Recovered<img src={downArrow}></img></div>
            )
            break;
        case 'deaths':
            caseLabels=(
                <div className={styles.Labels}>Total Death<img src={upArrow}></img></div>
            )
            break;   

    }
    
    return(
        <div className={styles.Case}>
            <div>
                {caseLabels}
                <p className={styles.Details}>{props.details}</p>
            </div>
            <Graph label={props.label}/>
        </div>  
    );
}

export default Case;