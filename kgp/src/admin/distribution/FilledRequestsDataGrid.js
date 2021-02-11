import React, { Component } from "react";
import { DataGrid } from '@material-ui/data-grid';

class KindergartensDataGrid extends Component {

    render() {
        const rows = [
            { id: 1, col1: '501', col2: 'ID-010203', col3: 'Петров Петр Петрович', col4: '28.04.2017', col5: 'test1@gmail.com', col6: '501, 502' },
            { id: 2, col1: '502', col2: 'ID-010204', col3: 'Иванов Иван Иванович', col4: '28.04.2017', col5: 'test2@gmail.com', col6: '502, 503' },
            { id: 3, col1: '503', col2: 'ID-010205', col3: 'Федоров Федор Федорович', col4: '28.04.2017', col5: 'test3@gmail.com', col6: '501, 502, 503' }
        ];

        const columns = [
            { field: 'col1', headerName: '№ сада', width: 150 },
            { field: 'col2', headerName: '№ заявки', width: 150 },
            { field: 'col3', headerName: 'ФИО ребенка', width: 300 },
            { field: 'col4', headerName: 'Дата рождения', width: 300 },
            { field: 'col5', headerName: 'Email родителя', width: 300 },
            { field: 'col6', headerName: 'Желаемые сады', width: 300 }
        ];

        return <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>;
    }
}

export default KindergartensDataGrid;