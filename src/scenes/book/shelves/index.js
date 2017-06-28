import React, { Component } from 'react';
import stores from '../../../stores';
import RaisedButton from 'material-ui/RaisedButton';
import shelves from './shelves';


export default class Shelves extends Component {
    constructor(props) {
        super(props);
        this.changePrice = this.changePrice.bind(this)
        this.refreshData = this.refreshData.bind(this);
    }

    refreshData(e) {
        stores.dispatch({ type: 'SHELVES_DOWNLOAD', shelves })
    }

    changePrice(e, shelf) {
        stores.dispatch({ type: 'SHELVES_UPDATE', shelf })
    }

    componentDidMount() {
        stores.dispatch({ type: 'SHELVES_DOWNLOAD', shelves })
    }

    render() {
        return (
            <article>
                <section style={styles.toolbar}>
                    <RaisedButton primary={true}>新增</RaisedButton>
                    <RaisedButton onClick={this.refreshData}>刷新</RaisedButton>
                </section>
                <section>
                    <ul style={styles.grid}>
                    {stores.getState().book.shelves.map(el=>
                        <li style={styles.row} key={el.id}>
                            <span style={styles.show}>{el.brand}</span>
                            <span style={styles.show}>{el.price}</span>
                            <RaisedButton style={styles.show} onClick={(e)=>{this.changePrice(e,el)}}>add price 100 once </RaisedButton>
                        </li>
                    )}
                    </ul>
                </section>
            </article>
        )
    }
}

var styles = {
    toolbar: {
        padding: '10px'
    },
    show: {
        display: 'inline-block',
        width: 300
    },
    grid: {
        padding: '10px 0',
        background: '#eee'
    },
    row: {
        padding: '10px'
    }
}
