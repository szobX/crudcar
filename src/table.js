import React from 'react';

// import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
const Clear = (props) => {
    return (
        <>
            {props.czysty ? 'czysty' : 'brudny'}
        </>
    );
}

const DatatablePage = (props) => {

    return (
        <table class="table">
            <thead>
                {props.data.columns.map(col => (<th scope="col">{col.label} {col.field !== 'akcja' && <i class="fas fa-arrows-alt-v"></i>} </th>))}
            </thead>
            <tbody>
                {props.data.rows.map(row => (
                    <tr>
                        <td>{row.rej}</td>
                        <td>{row.model}</td>
                        <td>{row.segment}</td>
                        <td><Clear czysty={row.czysty} /></td>
                        <td><input className="form-control" type="text" value={row.kto} /></td>
                        <td>{row.kiedy}</td>
                        <td>
                            <i class="fas fa-trash"></i>
                            <i class="fas fa-random"></i>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
}

export default DatatablePage;