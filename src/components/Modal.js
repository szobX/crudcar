import React, { Component } from 'react';
import $ from 'jquery'
import DateFormat from 'dateformat'
import DateTimePicker from 'react-datetime-picker/dist/entry';
class Modal extends Component {
    state = {
        settings: null,
        date: null,
        value: null,
    }

    componentDidMount() {
        this.setState({
            settings: this.props.settings,
            date: new Date(),
            value: DateFormat(this.state.date, 'dd-mm-yyyyTHH:MM')
        })

    }
    onChange = (e) => {
        this.setState({ date: e.target.value })
    }

    render() {

        return (

            < div >
                <div className="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">PRZYPISANIE AUTA</h5>
                                <button type="button" className="close" onClick={this.props.hide}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">
                                <p>{this.props.settings.model}</p>
                                <div class="form-group">
                                    <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
                                        <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker" />
                                        <div class="input-group-append" data-target="#datetimepicker1" data-toggle="datetimepicker">
                                            <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.props.hide}>Zamknij</button>
                                <button type="button" onClick={() => console.log(this.state.value)} className="btn btn-primary">Przenieś</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Modal;