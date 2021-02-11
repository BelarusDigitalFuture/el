import React, { Component } from "react";
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';

class KindergartensDataGrid extends Component {

    render() {
        const rows: RowsProp = [
            { id: 1, col1: '501', col2: '15', col3: '20'},
            { id: 2, col1: '502', col2: '2', col3: '10'},
            { id: 3, col1: '503', col2: '25', col3: '10' }
        ];

        const columns: ColDef[] = [
            { field: 'col1', headerName: '№ сада', width: 150 },
            { field: 'col2', headerName: 'Количество заявок', width: 300 },
            { field: 'col3', headerName: 'Количество мест', width: 300 }
        ];

        return <DataGrid rows={rows} columns={columns} />;
    }
}

export default KindergartensDataGrid;