import React, { Component } from 'react';

class ActionMenu extends Component {
    state = {}


    handleChange = () => {
        console.log(this.props.props)
    }
    render() {


        return (
            <div>

                <i data-toggle="modal" data-target="#exampleModalCenter" className="fa fa-trash" aria-hidden="true"></i>

                <i className="fa fa-pencil" aria-hidden="true"></i>

                <i className="fa fa-hourglass-end" aria-hidden="true"></i>



            </div>
        );
    }
}

export default ActionMenu; 