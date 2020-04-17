import React, { PureComponent } from 'react';
import styles from '../Tweets/Tweets.module.css';
import axios from 'axios';
import Spinner from '../../Components/UI/Spinner/Spinner'
import TweetItem from './TweetItem/TweetItem';


class Tweet extends PureComponent{
    state={
        loading:false,
        tweets:[]
    }
    componentDidMount(){
        axios('./tweets.json')
        .then(response=>{
            console.log(response.data.tweets)
            this.setState({...this.state,loading:true,tweets:response.data.tweets});
        })
        .catch(error=>console.log(error))
    }
    render(){
        if(this.state.loading==false){
            var spinner = (<Spinner/>)
        }
        if(this.state.tweets.length!=0){
           var tweet = (this.state.tweets.map(items=>{
                return(
                    <TweetItem heading={items.title} url={items.url} description={items.description} likes={items.likes} view={items.views} date={items.date}/>
                );
            }))
        }
        return(
            <div  className={styles.tweets}>
                {spinner}
                {tweet}
            </div>
        );
    }
}

export default Tweet;