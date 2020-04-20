import React from 'react';
import styles from '../FAQ/faq.module.css';
import covid from '../../assests/images/covid.png';
import symptoms from '../../assests/images/symptoms.png';
import incubation from '../../assests/images/incubation.png';
import spread from '../../assests/images/spread.png';
import precautions from '../../assests/images/precautions.png';
import what from '../../assests/images/what.png';

const FAQ=()=>{
    return(
        <div className={styles.faq}>
            <div className={styles.overlay}>
                <div className={styles.flex}>
                    <img className={styles.image} src={covid}></img>
                    <h1 className={styles.heading}>FAQ ?</h1>
                </div>
                <div className={styles.boxes}>
                  <div className={styles.box}> 
                        <img className={styles.subImage} src={what}></img>
                        <a target="blank" href="https://www.who.int/health-topics/coronavirus#tab=tab_1">what is the corona virus</a>
                            
                       </div>
                    <div className={styles.box}> 
                    <img  className={styles.subImage} src={spread}></img>
                    <a  target="blank" href="/https://www.healthline.com/health/coronavirus-transmission">how corona spreads</a>
                            </div>
                       
                    <div className={styles.box}>
                    <img className={styles.subImage} src={incubation}></img>
                    <a target="blank" href="https://www.healthline.com/health/coronavirus-incubation-period">what is the incubation period of corona virus</a>
                            </div>
                    <div className={styles.box}>   
                    <img className={styles.subImage} src={symptoms}></img>
                    <a target="blank" href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">what are the symptoms of corona virus</a>
                     </div>
                    <div className={styles.box}>   
                    <img className={styles.subImage} src={precautions}></img>
                    <a target="blank" href="https://economictimes.indiatimes.com/news/politics-and-nation/coronavirus-in-india-10-ways-to-make-sure-you-dont-catch-the-disease/articleshow/74488435.cms?from=mdr">how can we prevent corona virus</a>
                     </div>
                
                </div>
          </div>
        </div>
    );
}

export default FAQ;