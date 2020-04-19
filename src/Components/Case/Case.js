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
    var formatDetails = props.details.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
        let caseLabels = '';
    switch(props.label){
        case 'total':
            caseLabels=(
                <div className={styles.Labels}> Total Cases<img className={styles.image} src={upArrow}></img></div>
            )
            break;
        case 'active':
            caseLabels=(
                <div style={{fontSize:'13px'}} className={styles.Labels}>Active Cases<img className={styles.image} src={upArrow}></img></div>
            )
            break; 
        case 'recovered':
            caseLabels=(
                <div  className={styles.Labels}>Recovered<img className={styles.image} src={downArrow}></img></div>
            )
            break;
        case 'deaths':
            caseLabels=(
                <div className={styles.Labels}>Total Death<img className={styles.image} src={upArrow}></img></div>
            )
            break;   

    }

    return(
        <div className={styles.Case}>
            <div>
                {caseLabels}
                <p className={styles.Details}>{formatDetails}</p>
            </div>
            <Graph  className={styles.sub} label={props.label}/>
        </div>  
    );
}

export default Case;