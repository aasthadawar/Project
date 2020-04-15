import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import axios from 'axios';
 

class Carousel extends Component{
    componentDidMount(){
        axios.get('http://newsapi.org/v2/top-headlines?q=COVID&country=in&apiKey=e4a1b8f18073429b85366a0b6f31c8d5')
        .then(response=>console.log('response',response.data))
        .catch(error=>console.log(error))
    }
    render(){
    return(
        <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={20}
            totalSlides={3}
          >
            <Slider>
              
            </Slider>
            <DotGroup />
          </CarouselProvider>
    )
}
}

export default Carousel;