import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class KindergartensDropdown extends Component {

    render() {
        const options = [
            '№501 (10 мест/ 5 заявок)', '№502 (10 мест/ 6 заявок)', '№503 (10 мест/ 0 заявок)'
        ];
        return <div>
            <Dropdown options={options} placeholder="Выберите сад"/>
        </div>;
    }
}

export default KindergartensDropdown;