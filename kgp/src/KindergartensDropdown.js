import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class KindergartensDropdown extends Component {

    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        const options = [
            '№501 (10 мест/ 5 заявок)', '№502 (10 мест/ 6 заявок)', '№503 (10 мест/ 0 заявок)'
        ];
        return <div>
            <Dropdown options={options}/>
        </div>;
    }
}

export default KindergartensDropdown;