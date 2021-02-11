import React, {Component} from "react";
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import 'react-tabs/style/react-tabs.css';
import KindergartensDataGrid from "./KindergartensDataGrid";
import DistributionHeader from "./DistributionHeader";

class Kindergarten extends Component {
    render() {
        return <div className='container-fluid'>
            <DistributionHeader />
            <div className='container-fluid'>
                <h1 className='mb-4'>Ясли</h1>
                <div style={{ height: 300, width: '100%' }} className='mb-5'>
                    <KindergartensDataGrid/>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    }
}

export default Kindergarten;