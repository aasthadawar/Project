import React, { useEffect } from 'react';
import styles from '../Tweets/Tweets.module.css';
import Spinner from '../UI/Spinner/Spinner'
import TweetItem from '../TweetItem/TweetItem';
import { initTweetsDetails } from '../../store/Actions/TweetsAction';
import { connect } from 'react-redux';
import tweets from '../../assests/images/twitter.png';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

const Tweet = React.memo((props) => {
    var myInterval = " ";

    useEffect(() => {
        props.onTweetsDetails();
        myInterval = setInterval(() => {
            this.props.onTweetsDetails()
        }, 600000);

        return () => {
            clearInterval(myInterval);
        }
    }, [props.onTweetsDetails])


    if (props.tweets) {
        if (props.tweets.length === 0 && props.tweetsError === false) {
            var spinner = <Spinner />;
        }

        else if (props.tweets.length !== 0) {
            var heading = (
                <h2 className={styles.heading}>Latest Tweets<img src={tweets} alt="tweets icon" ></img></h2>
            )

            var tweet =
                (
                    props.tweets.map(items => {
                        var splitted = items.created_at.split(' ');
                        var date = `${splitted[2]}th ${splitted[1]}`;
                        var text = items.text.split('https')[0];
                        return (
                            <TweetItem key={items.id}
                                description={text} date={date}
                                share={items.retweet_count} likes={items.favorite_count}
                                heading={items.user.name} value={items.user.screen_name}
                                url={items.user.profile_image_url_https}
                            />
                        );
                    })
                );
        }
    }

    if (props.tweetsError === true) {
        var error = <ErrorHandling />;
    }

    return (
        <div className={styles.tweets}>
            {spinner}
            {error}
            {heading}
            <div className={styles.tweet}>
                {tweet}
            </div>

        </div>
    );

})

const mapStateToProps = (state) => {
    return {
        tweets: state.tweet.tweets,
        tweetsError: state.tweet.tweetsError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTweetsDetails: () => dispatch(initTweetsDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);