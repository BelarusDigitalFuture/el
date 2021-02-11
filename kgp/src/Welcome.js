import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {Col, Container, Row} from "react-bootstrap";

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return <Container className='text-center'>
            <Row>
                <Col>
                    <p className='text-muted'>Электронное распределение мест в детских садах</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='text-primary font-weight-bold d-md-none'>32 дня 7 минут 40 секунд</p>
                    <p className='text-primary font-weight-bolder display-4 d-none d-md-block'>32 дня 7 минут 40 секунд</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='text-muted mb-5'>до начала распределения</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={3}>
                    <Link to="/kidDetails">
                        <Button className='btn-block'>Подать заявку</Button>
                    </Link>
                </Col>
            </Row>
        </Container>;
    }
}

export default Welcome;