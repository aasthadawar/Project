import React from 'react';
import styles from './Carousel.module.css';
import Aux from '../../hoc/Aux/Aux';
import arrow from '../../assests/images/right.png';

const Carousel = (props) => {
    return (
        <Aux>
            <div className={styles.News}>
                <div className={styles.ImageDiv}>
                    <img className={styles.image} src={props.image} />
                </div>
                <div className={styles.data}>
                    <p className={styles.main}>News and Updates</p>
                    <p className={styles.description}>{props.heading}</p>
                    <div className={styles.Btn}><a target="blank" href={props.route}>{ props.buttonText}<img className={styles.arrow} src={arrow}></img></a></div>
                </div>
            </div>
        </Aux>
    );
}

export default Carousel;