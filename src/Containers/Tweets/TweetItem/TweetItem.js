import React from 'react';
import likes from '../../../assests/images/like.png';
import view from '../../../assests/images/view.png';
import styles from '../TweetItem/TweetItem.module.css';

const TweetItem=(props)=>{
    //<img className={styles.image} src={props.url}></img>
    return(
        <div className={styles.tweet}>
            <div className={styles.heading}>
            <img className={styles.image} src={props.url}></img>
                <div className={styles.value}>
                    <h2>{props.heading}</h2>
                    <p className={styles.subheading}>@{props.value}</p>
                </div>
            </div>
            <p className={styles.description}>{props.description}</p>
            <div className={styles.main}>
                <div className={styles.sub}>
                    <p className={styles.views}><img className={styles.image1} src={view}></img>{props.likes}</p>
                    <p className={styles.share}><img className={styles.image1} src={likes}></img>{props.share}</p>
                </div>
                <p className={styles.date}>{props.date}</p>
            </div>
        </div>
    );
}

export default TweetItem;