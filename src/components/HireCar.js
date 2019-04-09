import React, { Component } from 'react';
// import React, { Component } from 'react
import './App.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navside from './Navside'
import DataFromat from 'dateformat'
import DataView from './DataView'

// import dataColumns from './Data/Data';
import { rows } from '../Data/data'
import ActionMenu from './ActionMenu'
const now = new Date()
const Columns = [



    {
        Header: () => DataFromat(now, 'yyyy-mm-dd'),
        headerClassName: ''
        ,
        columns: [{
            Header: 'REJESTRACJA',
            accessor: 'rej',
            filterable: true,
        },
        {
            Header: 'MODEL',
            accessor: 'model',
            filterable: true,
        },
        {
            Header: 'SEGMENT',
            accessor: 'segment',
            width: 100,
            filterable: true,
        },
        {
            Header: 'Wraca',
            accessor: 'wraca',
            filterable: true,
            Cell: row => {
                return (<div
                    style={{
                        color: row.value !== null ? null : 'green',
                        fontWeight: row.value !== null ? null : 'bold'
                    }}
                > <DataView data={row.value} /></div>
                )
            }
        },
        {
            Header: "AKCJA",
            accessor: "akcja",
            sortable: false,
            width: 150,
            filterable: false,
            Cell: (row) => {
                return (
                    <button onClick={
                        () => {
                            console.log(row.row)
                        }
                    } className="btn btn-primary">TEST</button>
                )
            }
        }]
    }]


class HireCar extends Component {
    state = {}

    onlyrows = rows.filter(row => { if (row.wraca !== null) return true })
    render() {

        return (
            <div className="content">
                <ReactTable
                    style={{
                        'textAlign': 'center',
                    }}
                    className={'-highlight'}
                    filterable
                    defaultPageSize={15}

                    showPagination={false}

                    getProps={(state, rowInfo, column) => {

                        if (rowInfo && rowInfo.row) {
                            console.log(rowInfo)
                        }
                        else { return {} }

                    }}

                    getTrProps={(state, rowInfo, column) => {

                        if (rowInfo && rowInfo.row) {
                            const a = Number(DataFromat(rowInfo.row._original.wraca, 'HH'))
                            const b = Number(DataFromat(now, 'HH'))
                            const mm = Number(DataFromat(rowInfo.row._original.wraca, 'mm'))
                            const mmd = Number(DataFromat(now, 'mm'))
                            if (mm === mmd) {
                                return {

                                    style: {
                                        background: a < b ? "rgba(241, 159, 34,0.3)" : ""
                                        // background: rowInfo.row.wr > 20 ? "green" : "red"
                                    }
                                }
                            } else { return {} }

                        }
                        else {
                            return {}
                        }

                        // return {

                        // };
                    }}
                    columns={Columns}

                    data={this.onlyrows}
                >

                </ReactTable>

            </div >

        );
    }
}

export default HireCar;