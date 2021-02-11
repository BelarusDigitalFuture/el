import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

class ManageressView extends Component {

    render() {

        return <Container>
            <Row className="justify-content-center">
                <Col className="col-md-6 border border-md-1 m-3 m-md-4 p-3 p-md-4 rounded shadow">
                    <Form>
                        <h1 className='mb-5'>Вход для заведующей</h1>

                        <FormGroup className='form-group-lg'>
                            <label>
                                Имя пользователя
                            </label>
                            <FormControl className='form-control-lg'/>
                        </FormGroup>
                        <FormGroup className='mb-5'>
                            <label>
                                Пароль
                            </label>
                            <FormControl className='form-control-lg'/>
                        </FormGroup>
                        <Row className='mb-3'>
                            <Col md={5} className='mb-2'>
                                <Link to="/places">
                                    <Button className='btn-block btn-lg'>Войти</Button>
                                </Link>
                            </Col>
                            <Col className='mb-2'>
                                <a href='#' className='btn btn-block d-md-none btn-lg btn-link text-muted'>Забыла пароль</a>
                                <a href='#' className='btn d-none d-md-inline-block btn-lg btn-link text-muted'>Забыла пароль</a>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>;
    }
}

export default ManageressView;