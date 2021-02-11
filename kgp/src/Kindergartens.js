import React, { Component } from "react";
import {Link} from "react-router-dom";
import KindergartensDropdown from "./KindergartensDropdown";

class Kindergartens extends Component {

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
        return <form>
            <h2>Выберите желаемые сады</h2>
            <KindergartensDropdown/>
            <KindergartensDropdown/>
            <KindergartensDropdown/>
            <KindergartensDropdown/>
            <KindergartensDropdown/>
            <Link to="/confirmation">Дальше</Link>
        </form>;
    }
}

export default Kindergartens;