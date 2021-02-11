import React, { Component } from "react";
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FilledRequestsDataGrid from "./FilledRequestsDataGrid";
import KindergartensDataGrid from "./KindergartensDataGrid";
import FreeRequestsDataGrid from "./FreeRequestsDataGrid";

class DistributionView extends Component {

    render() {
        return <div className='container-fluid'>
            <h1 className='mb-5'>Распределение заявок</h1>
            <div style={{width: '100%' }}>
                <Tabs>
                    <TabList>
                        <Tab>Распределенные заявки</Tab>
                        <Tab>Свободные заявки</Tab>
                        <Tab>Ясли</Tab>
                        <Tab>Младшие группы</Tab>
                        <Tab>Средние группы</Tab>
                        <Tab>Старшие группы</Tab>
                    </TabList>

                    <TabPanel>
                        <div style={{ height: 300, width: '100%' }}>
                            <FilledRequestsDataGrid/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div style={{ height: 300, width: '100%' }}>
                            <FreeRequestsDataGrid/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div style={{ height: 300, width: '100%' }}>
                            <KindergartensDataGrid/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div style={{ height: 300, width: '100%' }}>
                            <KindergartensDataGrid/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div style={{ height: 300, width: '100%' }}>
                            <KindergartensDataGrid/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div style={{ height: 300, width: '100%' }}>
                            <KindergartensDataGrid/>
                        </div>
                    </TabPanel>
                </Tabs>
                <br/>
                <Form>
                    <Row className="mb-4">
                        <Col md={2}>
                            <Button className='btn-block'>Запустить распределение</Button>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>
                            <Button className='btn-block'>Настроить таймер распределения</Button>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>
                            <Button className='btn-block'>Добавить ребенка в сад</Button>
                        </Col>
                    </Row>
                </Form>
            </div>;
        </div>;
    }
}

export default DistributionView;