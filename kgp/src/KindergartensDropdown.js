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
            'one', 'two', 'three'
        ];
        return <div>
            <Dropdown options={options}/><button>+</button>
        </div>;
    }
}

export default KindergartensDropdown;