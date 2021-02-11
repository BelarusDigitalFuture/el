import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

class PlacesView extends Component {
    render() {
        return <Container><Form>
            <h1 className='mb-5'>Ясли-сад №501</h1>
            <h2 className='mb-5'>Свободные места в группах</h2>
            <div className='form-row'>
                <FormGroup className='col-md-6'>
                    <label>
                        Ясли
                    </label>
                    <FormControl/>
                </FormGroup>
            </div>
            <div className='form-row'>
                <FormGroup className='col-md-6'>
                    <label>
                        Младшие группы
                    </label>
                    <FormControl/>
                </FormGroup>
            </div>
            <div className='form-row'>
                <FormGroup className='col-md-6'>
                    <label>
                        Средние группы
                    </label>
                    <FormControl/>
                </FormGroup>
            </div>
            <div className='form-row'>
                <FormGroup className='col-md-6'>
                    <label>
                        Старшие группы
                    </label>
                    <FormControl/>
                </FormGroup>
            </div>
            <Row>
                <Col md={6}>
                    <Link to="/manageressConfirmation">
                        <Button className='btn-block'>Обновить</Button>
                    </Link>
                </Col>
            </Row>
        </Form></Container>;
    }
}

export default PlacesView;