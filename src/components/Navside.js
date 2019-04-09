import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
const Navside = () => {
    return (

        <div className="sidebar" >

            <Link to="/" className="nav-item">STAN AUT</Link>
            <Link to="/wydane" className="nav-item">WYDANE AUTA</Link>
            <Link to="/generuj" className="nav-item">GENERUJ </Link>
            <Link className="nav-item ">
                <div className="circleAdd" >
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
            </Link>

        </div >

    );
}

export default Navside;