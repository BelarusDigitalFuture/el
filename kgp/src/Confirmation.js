import React, { Component } from "react";

class Confirmation extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return <div>
            <h1>Ваша заявка ID-010203</h1>
            <h2>На ваш email отправлено письмо с подтверждением заявки</h2>
        </div>;
    }
}

export default Confirmation;