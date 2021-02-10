import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return <Link to="/kidDetails">Подать заявку</Link>;
    }
}

export default Welcome;