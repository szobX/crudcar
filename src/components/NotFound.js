import React, { Component } from 'react';
class NotFound extends Component {
    state = {}


    tab = [1, 2, 3, 0, 5, 6, 666, 8, 9]
    tabs = this.tab.reduce((acc, tab) => acc + tab)

    render() {
        { }
        return (

            < div >
                {this.tabs}
                <code>
                    NOT FOUND
                     {this.tabs}
                </code>
            </div >
        );
    }
}

export default NotFound;