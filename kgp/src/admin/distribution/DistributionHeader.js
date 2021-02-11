import React, { Component } from "react";
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';
import {Col, Form, Nav, Navbar, NavbarBrand, NavDropdown, NavItem, NavLink, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FilledRequestsDataGrid from "./FilledRequestsDataGrid";
import KindergartensDataGrid from "./KindergartensDataGrid";
import FreeRequestsDataGrid from "./FreeRequestsDataGrid";

class DistributionView extends Component {

    render() {
        return <Navbar bg='light' variant='light' className='mb-3'>
            <NavbarBrand >РАНО</NavbarBrand>
            <NavLink href='/distribution'>
                Заявки
            </NavLink>
            <NavDropdown id='kindergarten' title='Сады'>
                <NavDropdown.Item href="kindergarten#Ясли">Ясли</NavDropdown.Item>
                <NavDropdown.Item href="kindergarten#Средняя группа">Средняя группа</NavDropdown.Item>
                <NavDropdown.Item href="kindergarten#Старшая группа">Старшая группа</NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    }
}

export default DistributionView;