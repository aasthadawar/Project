import React, { PureComponent } from 'react';
import styles from '../News/News.module.css';
import {initNewsDetails} from '../../store/Actions/NewsActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import ErrorHandling from '../../Components/ErrorHandling/ErrorHandling';

class News extends PureComponent{
    myInterval="";
    componentDidMount(){
        this.startRolling();
        this.props.onNewsDetails()
        this.myInterval = setInterval(()=>{
            this.props.onNewsDetails();
        },600000)
    }
    state = {
        index: 0,
         handle: null
     }
 startRolling=()=> {
     const handle = setInterval(() => {
         let currentIndex = this.state.index + 1;
         this.setState({index: currentIndex % 9 });
     }, 3000);

     this.setState({
         handle: handle
     });
 }

 componentWillUnmount() {
     clearInterval(this.state.handle);
     clearInterval(this.myInterval);
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
            if(this.props.news){
                if(this.props.news.length==0 && this.props.newsError==false){
                    var spinner = <Spinner/>
                }
                else if(this.props.length!=0){         
                    var array=(
                     this.props.news.map(items=>{
                         return(
                             <Carousel imageStyle={styles.Image1}
                             image={items.urlToImage}
             heading={items.title}
             route={items.url}
             buttonText="Read More" 
                             />
                         );
                     })
                    )
                    var withIndex = array[this.state.index];

                    var dots =(
                        <Aux>
                            <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 0 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 1 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 2 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 3 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 4 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 5 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 6 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 7 ? styles.DotActive : '')}></Link>
                <Link to="/home" onClick={()=>this.setCurrentIndex(0)} className={styles.Dot + " " + (this.state.index == 8 ? styles.DotActive : '')}></Link>
                        </Aux>
                    )
                 }
            }
            if(this.props.newsError==true){
                var error = <ErrorHandling/>
            }
            
            return (
            <div className={styles.carousel} onMouseEnter={this.stopRolling} onMouseLeave={this.startRolling}>
                    {spinner}
                    {error}
                    <div className={styles.banner}>
                        { withIndex}
                    </div>
                    <div className={styles.DotContainer}>
                        {dots}
                    </div>
            </div>

                );
            }
       
    
}

const mapStateToProps=(state)=>{
    return{
        news:state.newsR.news,
        newsError:state.newsR.newsError
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onNewsDetails:()=>dispatch(initNewsDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);

