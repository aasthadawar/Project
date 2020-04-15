import React, { PureComponent } from 'react';
import styles from '../News/News.module.css';
import Carousel from '../../Components/UI/Carousel/Carousel';


class News extends PureComponent{
    render(){
            return (
               <div> 
                   <Carousel/>
               </div>

                );
            }
       
    
}

export default News;

