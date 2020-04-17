import React from 'react';
import likes from '../../../assests/images/like.png';
import view from '../../../assests/images/view.png';
import styles from '../TweetItem/TweetItem.module.css';

const TweetItem=(props)=>{
    return(
        <div className={styles.tweet}>
            <div className={styles.heading}>
                <img className={styles.image} src={props.url}></img>
                <h2>{props.heading}</h2>
            </div>
            <p>{props.description}</p>
            <div className={styles.main}>
                <div className={styles.sub}>
                    <p className={styles.views}><img className={styles.image1} src={view}></img>{props.view}</p>
                    <p><img className={styles.image1} src={likes}></img>{props.likes}</p>
                </div>
                <p>{props.date}</p>
            </div>
        </div>
    );
}

export default TweetItem;