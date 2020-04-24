import React, { useEffect, useState } from 'react';
import styles from '../News/News.module.css';
import { initNewsDetails } from '../../store/Actions/NewsActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import Spinner from '../UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

const News = React.memo((props) => {
    var myInterval = "";
    var [index, setIndex] = useState(0);
    var [handle, setHandle] = useState(null)

    useEffect(() => {
        props.onNewsDetails()
        myInterval = setInterval(() => {
            props.onNewsDetails();
        }, 600000)

        return () => {
            clearInterval(handle);
            clearInterval(myInterval);
        }
    }, [props.onNewsDetails])

    useEffect(() => {
        startRolling();
    }, [])

    const startRolling = () => {
        const handle = setInterval(() => {
            setIndex(index => (index + 1) % 9);
        }, 2000);
        setHandle(handle);

    }

    const stopRolling = () => {
        clearInterval(handle);
    }

    const setCurrentIndex = (ind) => {
        setIndex(ind);
    }

    if (props.news) {
        if (props.news.length == 0 && props.newsError == false) {
            var spinner = <Spinner />
        }
        else if (props.length != 0) {
            var array = (
                props.news.map(items => {
                    return (
                        <Carousel imageStyle={styles.Image1}
                            image={items.urlToImage}
                            heading={items.title}
                            route={items.url}
                            buttonText="Read More"
                        />
                    );
                })
            )
            var withIndex = array[index];

            var dots = (
                <Aux>
                    <Link to="/home" onClick={() => setCurrentIndex(0)} className={styles.Dot + " " + (index == 0 ? styles.DotActive : '')}></Link>
                    <Link to="/home" onClick={() => setCurrentIndex(1)} className={styles.Dot + " " + (index == 1 ? styles.DotActive : '')}></Link>
                    <Link to="/home" onClick={() => setCurrentIndex(2)} className={styles.Dot + " " + (index == 2 ? styles.DotActive : '')}></Link>
                    <Link to="/home" onClick={() => setCurrentIndex(3)} className={styles.Dot + " " + (index == 3 ? styles.DotActive : '')}></Link>
                    <Link to="/home" onClick={() => setCurrentIndex(4)} className={styles.Dot + " " + (index == 4 ? styles.DotActive : '')}></Link>
                    <Link to="/home" onClick={() => setCurrentIndex(5)} className={styles.Dot + " " + (index == 5 ? styles.DotActive : '')}></Link>
                    <Link to="/home" onClick={() => setCurrentIndex(6)} className={styles.Dot + " " + (index == 6 ? styles.DotActive : '')}></Link>
                    <Link to="/home" onClick={() => setCurrentIndex(7)} className={styles.Dot + " " + (index == 7 ? styles.DotActive : '')}></Link>
                    <Link to="/home" onClick={() => setCurrentIndex(8)} className={styles.Dot + " " + (index == 8 ? styles.DotActive : '')}></Link>
                </Aux>
            )
        }
    }
    if (props.newsError == true) {
        var error = <ErrorHandling />
    }

    return (
        <div className={styles.carousel} onMouseEnter={stopRolling} onMouseLeave={startRolling}>
            {spinner}
            {error}
            <div className={styles.banner}>
                {withIndex}
            </div>
            <div className={styles.DotContainer}>
                {dots}
            </div>
        </div>

    );



})

const mapStateToProps = (state) => {
    return {
        news: state.newsR.news,
        newsError: state.newsR.newsError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewsDetails: () => dispatch(initNewsDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);