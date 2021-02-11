import React, { Component } from "react";
import {Link} from "react-router-dom";
import KindergartensDropdown from "./KindergartensDropdown";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

class Kindergartens extends Component {

    render() {
        const options = [
            'one', 'two', 'three'
        ];
        return <Container><Form>
            <h1 className='mb-5'>Выбор садов</h1>
            <h2 className='mb-5'>Выберите в порядке приоритета</h2>
            <Row className='mb-4'>
                <Col md={6}>
                    <KindergartensDropdown/>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col md={6}>
                    <KindergartensDropdown/>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col md={6}>
                    <KindergartensDropdown/>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col md={6}>
                    <KindergartensDropdown/>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col md={6}>
                    <KindergartensDropdown/>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col md={6}>
                    <Link to="/confirmation">
                        <Button className='btn-block'>Дальше</Button>
                    </Link>
                </Col>
            </Row>
            </Form></Container>;
    }
}

export default Kindergartens;