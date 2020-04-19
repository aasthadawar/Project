import React, { PureComponent } from 'react';
import styles from '../Tweets/Tweets.module.css';
import axios from 'axios';
import Spinner from '../../Components/UI/Spinner/Spinner'
import TweetItem from './TweetItem/TweetItem';
import { initTweetsDetails } from '../../store/Actions/TweetsAction';
import {connect} from 'react-redux';
import tweets from '../../assests/images/twitter.png';



class Tweet extends PureComponent{
    myInterval=" ";
        state={
            loading:false
        }
    componentDidMount(){
        this.props.onTweetsDetails();
        this.setState({...this.state,loading:true})
        this.myInterval = setInterval(()=>{
            this.props.onTweetsDetails()
        },600000)
    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
    render(){          
        if(this.state.loading==false){
            var spinner = (<Spinner/>)     }
        if(this.props.tweets){
            if(this.props.tweets.length!=0){
                console.log('#########@@@@@@@@@@ tweets comp',this.props.tweets);
              var tweet =(this.props.tweets.map(items=>{
                  var splitted = items.created_at.split(' ');
                  var date = `${splitted[2]}th ${splitted[1]}`;
                  var text = items.text.split('https')[0];
                    return(
                        <TweetItem key={items.id}
                        description={text}  date={date}
                        share={items.retweet_count} likes={items.favorite_count}
                        heading={items.user.name} value={items.user.screen_name}
                        url={items.user.profile_image_url_https}
                        />
                    );
                }))
            }
        }
      
        return(
            <div  className={styles.tweets}>
                <h2 className={styles.heading}>Latest Tweets<img src={tweets}></img></h2>
                <div className={styles.tweet}>
                {spinner}
                {tweet}
                </div>
                
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        tweets:state.tweet.tweets
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onTweetsDetails:()=>dispatch(initTweetsDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tweet);