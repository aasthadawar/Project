import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Carousel/Carousel.module.css';
import Aux from '../../../hoc/Aux/Aux';

const Carousel = (props) => {
    var url = `../${props.route}`;
    console.log('url is',url); 
    return (
        <Aux>
            <div className={styles.News}>
                <div className={styles.ImageDiv}>
                    <img className={styles.image} src={props.image} />
                </div>
                <div className={styles.data}>
                    <p>News and Updates</p>
                    <p className={styles.Heading} to={props.route}>{props.heading}</p>
                    <a className={styles.Btn} target="blank" href={props.route}>{ props.buttonText}</a>
                </div>
            </div>
        </Aux>
    );
}

export default Carousel;