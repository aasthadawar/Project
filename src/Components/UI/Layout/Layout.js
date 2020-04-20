import React from 'react';
import Cases from '../../../Containers/Cases/Cases';
import Countries from '../../../Containers/Countries/Countries';
import Recovery from '../../../Containers/Recovery/Recovery';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import styles from '../Layout/Layout.module.css';
import Map from '../../Map/Map';
import News from '../../../Containers/News/News';
import Tweets from '../../../Containers/Tweets/Tweets';
import Trends from '../../../Containers/Trends/Trends';
const Layout=()=>{
    return(
               <Container className={styles.margin} fluid={true}>
                <Row noGutters={true} >
                    <Col lg={9}  className={styles.Cases}><Cases/>
                        <Row noGutters={true}>
                            <Col  className={styles.Countries} lg={4} md={12}><Countries/></Col>
                            <Col className={styles.Map} lg={8} md={12}><Map/></Col>
                        </Row>
                        <Row noGutters={true}>
                            <Col className={styles.CountryGraph} sm={12} md={6} lg={6}><Trends/></Col>
                            <Col className={styles.News} md={6} sm={12} lg={6}><News/></Col>
                        </Row>
                    </Col>
                    <Col  className={styles.Recovery} md={12} lg={3}><Recovery/>
                        
                        <Row noGutters={true}>
                            <Col lg={12}  className={styles.Tweets}><Tweets/></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    );
}

export default Layout;