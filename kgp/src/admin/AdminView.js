import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DistributionView from "./distribution/DistributionView";
import FormFileInput from "react-bootstrap/FormFileInput";

class AdminView extends Component {

    render() {
        return <Container><Form>
            <h1 className='mb-5'>Вход для РАНО</h1>

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
                    <Link to="/distribution">
                        <Button className='btn-block'>Войти</Button>
                    </Link>
                </Col>
            </Row>
        </Form></Container>;
    }
}

export default AdminView;