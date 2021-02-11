import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

class ManageressView extends Component {

    render() {

        return <Container><Form>
            <h1 className='mb-5'>Вход для заведующей</h1>

            <div className='form-row'>
                <FormGroup className='col-md-6'>
                    <label>
                        Имя пользователя
                    </label>
                    <FormControl/>
                </FormGroup>
            </div>
            <div className='form-row'>
                <FormGroup className='col-md-6'>
                    <label>
                        Пароль
                    </label>
                    <FormControl/>
                </FormGroup>
            </div>
            <Row>
                <Col md={4}>
                    <Link to="/places">
                        <Button className='btn-block'>Войти</Button>
                    </Link>
                </Col>
            </Row>
        </Form></Container>;
    }
}

export default ManageressView;