import React from 'react';
import Logo from '../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from '../Header/Header.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
        <Container className={styles.Header} fluid={true}>
            <Row>
                <Col xl={5} lg={5} md={5} sm={4} xs={12}><div><Logo /></div></Col>
                <Col xl={7} lg={7} md={7} sm={8} xs={12}><NavItems /></Col>
            </Row>
        </Container>
    );
}

export default Header;