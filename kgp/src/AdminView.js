import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row} from "react-bootstrap";

class AdminView extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return <div>
                    <Row>
                        <Link to="/distribution">Распределить заявки</Link>
                    </Row>
                    <Row>
                        <Link to="/distribution">Посмотреть распределение заявок</Link>
                    </Row>
                    <Row>
                        <Link to="/schedule">Настроить автоматическое распределние</Link>
                    </Row>
                </div>;
    }
}

export default AdminView;