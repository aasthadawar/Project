import React from 'react';
import Header from '../Header/Header';
import Cases from '../../../Containers/Cases/Cases';
import Countries from '../../../Containers/Countries/Countries';
import Recovery from '../../Recovery/Recovery';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import styles from '../Layout/Layout.module.css';
import Map from '../../../Containers/Map/Map';
import News from '../../../Containers/News/News';
import Tweets from '../../../Containers/Tweets/Tweets';
import Trends from '../../../Containers/Trends/Trends';

const Layout=()=>{
    return(
       <Container fluid={true}>
           <Row noGutters={true}>
               <Col className={styles.Header} lg={12}><Header/></Col>
               <Col lg={12}>
               <Container className={styles.margin} fluid={true}>
                <Row noGutters={true} >
                    <Col className={styles.Col9} lg={9}><Cases/>
                        <Row noGutters={true}>
                            <Col  className={styles.Countries} lg={4}><Countries/></Col>
                            <Col className={styles.Map} lg={8}><Map/></Col>
                        </Row>
                        <Row noGutters={true}>
                            <Col className={styles.CountryGraph} lg={6}><Trends/></Col>
                            <Col className={styles.News} lg={6}><News/></Col>
                        </Row>
                    </Col>
                    <Col className={styles.Recovery} lg={3}><Recovery/>
                        <Row noGutters={true}>
                            <Col lg={12} className={styles.Tweets}><Tweets/></Col>
                        </Row>
                    </Col>
                </Row>
            
            </Container>
               </Col>
           </Row>
            
        </Container>
    );
}

export default Layout;