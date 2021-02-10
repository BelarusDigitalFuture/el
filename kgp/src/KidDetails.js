import React, { Component } from "react";
import { Link } from "react-router-dom";

class KidDetails extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return <form>
            <h2>Данные о ребенке</h2>
            <label>
                Фамилия
            </label><br />
            <input type="text"/><br />
            <label>
                Имя
            </label><br />
            <input type="text"/><br />
            <label>
                Отчество
            </label><br />
            <input type="text"/><br />
            <label>
                Свидельство о рождении
            </label><br />
            <input type="file"/><br />
            <label>
                Ваш email
            </label><br />
            <input type="text"/><br />
            <Link to="/kindergartens">Дальше</Link>
        </form>;
    }
}

export default KidDetails;