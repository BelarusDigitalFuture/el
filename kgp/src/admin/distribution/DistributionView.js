import React, {Component} from "react";
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import 'react-tabs/style/react-tabs.css';
import FilledRequestsDataGrid from "./FilledRequestsDataGrid";
import DistributionHeader from "./DistributionHeader";

class DistributionView extends Component {
    render() {
        return <div className='container-fluid align-top'>
            <DistributionHeader />
            <div className='container-fluid'>
                <h1 className='mb-4'>Заявки</h1>
                <div style={{ height: 300, width: '100%' }}>
                    <FilledRequestsDataGrid/>
                </div>
                <Row className='mt-3'>
                    <Col>
                        <Button className='btn-lg mr-2'>Запустить распределение</Button>
                        <Button className='btn-lg mr-2'>Таймер распределения</Button>
                        <Button className='btn-lg'>Добавить ребенка в сад</Button>
                    </Col>
                </Row>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    }
}

export default DistributionView;