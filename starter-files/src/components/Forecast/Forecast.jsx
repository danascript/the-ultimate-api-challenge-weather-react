import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './Forecast.module.css';

const Forecast = () => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}></div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between"></Col>
        </Row>
    </Container>
);

export default Forecast;
