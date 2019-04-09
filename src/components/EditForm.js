import React, { Component } from 'react';
import { rows } from '../Data/data'
import DatePicker from "react-datepicker";
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.js'
import carNames from 'car-models'
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
class EditForm extends Component {
    state = {
        row: null,
        id: this.props.match.params.id,
        startDate: new Date(),
        data: [{
            model: null,
            rej: null,
            segment: null,
            czysty: null,
            kto: null,
            kiedy: null,
        }],

        options: [],

    };

    handleValue = (e) => {
        console.log(e.target.id)
        this.setState({ [e.target.id]: e.target.value })
    }
    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleSubmit = () => {
        const data = new Date(this.state.startDate.valueOf())

        alert(this.state.row.model + ' segment:' + this.state.row.segment + '<br/> OD: ' + data.toISOString())
    }
    componentDidMount() {
        const findCar = rows.filter((row) => {
            if (this.state.id === row.rej) return true
        })
        let cars = carNames.all().filter((car, index) => {
            if (index % 100 == 0) return car

        })
        console.log(cars)
        let carTemp = new Array()
        let carObject = cars.forEach(element => {
            carTemp.push({ value: element, label: element })
        });
        console.log(carTemp)
        this.setState({
            row: findCar[0],
            options: carTemp
        })
    }
    render() {
        const { row, id, startDate, data, options } = this.state
        return (

            <>
                {row === null ? 'Loading ....' : <div class="form"><h5><code>{row.rej}</code></h5>
                    <div className="row">
                        <div className="col">
                            <div class="form-group">
                                {data.model}
                                <label for="model">MODEL</label>
                                <Select isDisabled options={options} isSearchable defaultInputValue={row.model} />
                            </div>
                        </div>
                        <div className="col">
                            <div class="form-group">
                                <label for="segment">segment</label>

                                <input type="text" disabled class="form-control" id="segment" value={row.segment}
                                    onChange={this.handleValue}
                                />
                            </div>
                        </div>

                    </div>

                    <div class="form-group text-center">
                        <h4 style={{
                            color: row.czysty !== false ? null : 'red',
                            fontWeight: row.czysty !== false ? null : 'bold'
                        }}>{row.czysty ? 'CZYSTY' : 'BRUDNY!!'}</h4>
                    </div>

                    <div class="form-group">
                        <label for="kto">{row.kiedy ? 'REZERWACJA DLA' : 'WOLNY'}</label>
                        <input type="text"
                            class="form-control"
                            id="kto"
                            onChange={this.handleValue}
                            placeholder="Wpisz nazwisko"
                            value={row.kiedy ? row.kto : row.data} />
                    </div>
                    <div class="form-group">
                        OD KIEDY:
                                        <div class="input-group date" id="picker" data-target-input="nearest">
                            <DatePicker
                                className="form-control"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={30}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="time"
                            />
                            <div class="input-group-append" data-target="#datetimepicker1" data-toggle="datetimepicker">
                                <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        DO:
                                        <div class="input-group date" id="picker" data-target-input="nearest">
                            <DatePicker
                                className="form-control"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={30}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="time"
                            />
                            <div class="input-group-append" data-target="#datetimepicker1" data-toggle="datetimepicker">
                                <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} class="btn btn-primary">Submit</button> </div>
                }
            </>
        );
    }
}

export default EditForm;