import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import FormFileInput from "react-bootstrap/FormFileInput";
import Button from "react-bootstrap/Button";

class KidDetails extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return <Container><Form>
            <h1 className='mb-5'>Заявка</h1>
            <h2 className='mb-5'>Данные о ребенке</h2>
            <div className='form-row'>
                <FormGroup className='col-md-6'>
                    <label>
                        Имя
                    </label>
                    <FormControl name='name'/>
                </FormGroup>
                <FormGroup className='col-md-6'>
                    <label>
                        Фамилия
                    </label>
                    <FormControl/>
                </FormGroup>
            </div>
            <div className='form-row'>
                <FormGroup className='col-md-6'>
                    <label>
                        Отчество
                    </label>
                    <FormControl/>
                </FormGroup>
            </div>
            <div className='form-row'>
                <FormGroup className='col-md-6'>
                    <label>
                        Дата рождения
                    </label>
                    <FormControl type='date'/>
                </FormGroup>
                <FormGroup className='col-md-6'>
                    <label>
                        Свидетельство о рождении
                    </label>
                    <FormFileInput />
                </FormGroup>
            </div>
            <div className='form-row mb-5'>
                <FormGroup className='col-md-6'>
                    <label>
                        Email
                    </label>
                    <FormControl type='email'/>
                </FormGroup>
            </div>
            <Row>
                <Col md={6}>
                    <Link to="/kindergartens">
                        <Button className='btn-block'>Дальше</Button>
                    </Link>
                </Col>
            </Row>
        </Form></Container>;
    }
}

export default KidDetails;