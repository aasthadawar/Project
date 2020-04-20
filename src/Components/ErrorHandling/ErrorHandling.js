import React from 'react';
import error from '../../assests/images/error.png';
import styles from '../ErrorHandling/ErrorHandling.module.css';

const ErrorHandling=(props)=>{
    return(
        <div className={styles.error}>
            <img className={styles.image} src={error}></img>
            <p>OOPS! Something went wrong</p>
            <p></p>
        </div>
    );
}

export default ErrorHandling;