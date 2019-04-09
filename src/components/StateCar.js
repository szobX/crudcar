import React, { Component } from 'react';
import './App.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Link } from 'react-router-dom'
import DataFromat from 'dateformat'
import DataView from './DataView'
import { rows } from '../Data/data'
const now = new Date()
class StateCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            model: null,
            rej: null,
            segment: null,
            czysty: null,
            kto: null,
            kiedy: null,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleValue(e) {
        // console.log(e.target)
        this.setState({ model: e.target.value })
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }


    Columns = [
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
                Header: 'CZYSTY',
                filterable: false,
                accessor: 'czysty',
                Cell: row => {
                    return (<div
                        style={{
                            color: row.value === true ? null : 'red',
                            fontWeight: row.value === true ? null : 'bold'
                        }}
                    > {row.value ? 'CZYSTY' : 'BRUDNY'}</div>
                    )
                }
            },
            {
                Header: 'KTO BIERZE',
                accessor: 'kto',
                resizable: false,
                filterable: true,
            },
            {
                Header: 'KIEDY',
                accessor: 'kiedy',
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
                filterable: false,
                Cell: (row) => {
                    return (
                        <div>
                            <i data-toggle="modal" onClick={() => this.changeState(row.row)} className="fa fa-trash" aria-hidden="true"></i>
                            <Link to={`/car/${row.row.rej}`} >   <i className="fa fa-pencil" aria-hidden="true"></i></Link>


                            <i
                                className="fa fa-hourglass-end" aria-hidden="true"></i>

                        </div >
                    )
                }
            }]
        }]


    render() {
        return (
            <div className="content">
                <ReactTable
                    style={{
                        'textAlign': 'center',
                    }}
                    filterable
                    defaultPageSize={10}
                    className={'-striped'}
                    columns={this.Columns}
                    data={rows}
                    showPagination={false}

                >

                </ReactTable>

            </div>

        );
    }
}

export default StateCar;