import React, { PureComponent } from 'react';
import styles from '../News/News.module.css';
import {initNewsDetails} from '../../store/Actions/NewsActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Carousel from './Carousel/Carousel';

class News extends PureComponent{
    state={
        loading:false
    }
    componentDidMount(){
        this.startRolling();
        this.props.onNewsDetails()
        this.setState({...this.state,loading:true});
    }
    state = {
        index: 0,
         handle: null
     }


 startRolling=()=> {
     const handle = setInterval(() => {
         let currentIndex = this.state.index + 1;
         this.setState({index: currentIndex % 12 });
     }, 2000);

     this.setState({
         handle: handle
     });
 }

 componentWillUnmount() {
     clearInterval(this.state.handle);
 }

 stopRolling=()=> {
     clearInterval(this.state.handle);
 }

 setCurrentIndex=(index)=>{
     this.setState({
        index:index
     })
 }
    render(){
        if(this.state.loading==true){
            if(this.props.length!=0){         
               var array=(
                this.props.news.map(items=>{
                    return(
                        <Carousel imageStyle={styles.Image1}
                        image={items.urlToImage} alt="symptoms illustration"
        heading={items.title}
        route={items.url}
        buttonText="Read More" 
                        />
                    );
                })
               )
               var withIndex = array[this.state.index];
            }
        }
            return (
                <div className={styles.carousel} onMouseEnter={this.stopRolling} onMouseLeave={this.startRolling}>
                <div className={styles.banner}>
                    { withIndex}
                </div>
                <span className={styles.DotContainer}>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 0 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 1 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 2 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 3 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 4 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 5 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 6 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 7 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 8 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 9 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 10 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 11 ? styles.DotActive : '')}></Link>
                </span>
            </div>

                );
            }
       
    
}

const mapStateToProps=(state)=>{
    //console.log('!!!!!!!!!***** graph news',state.newsR.news);
    return{
        news:state.newsR.news
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onNewsDetails:()=>dispatch(initNewsDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);

