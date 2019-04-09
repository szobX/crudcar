import React from 'react';
import DateFromat from 'dateformat'
const DataView = (props) => {

    const date = () => {
        // const a = new Date('2019-05-01T11:00').valueOf()
        // console.log(parseInt(a))
        const now = new Date()
        const day = new Date(props.data * 1000)
        // console.log(DateFromat(day, 'm'))
        // console.log(DateFromat(now, 'm'))
        if (DateFromat(now, 'm') === DateFromat(day, 'm')) {
            // console.log(parse(DateFromat(now, 'd')))
            if (DateFromat(now, 'd') === DateFromat(day, 'd')) return ('dzisiaj ' + DateFromat(day, 'HH:MM'))
            else if (parseInt(DateFromat(now, 'd')) + 1 === parseInt(DateFromat(day, 'd'))) return ('jutro ' + DateFromat(day, 'HH:MM'))
            else return DateFromat(day, 'dd/mm/yy HH:MM')

        }
        else {
            return DateFromat(day, 'dd/mm/yy HH:MM')
        }
    }
    return (
        <>

            {}
            {
                props.data === null ? 'WOLNY' : date()
            }
        </>
    );
}

export default DataView;