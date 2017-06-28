import React, { Component } from 'react';
import stores from '../../../stores';
import RaisedButton from 'material-ui/RaisedButton';
import books from './books';
import * as actions from './actions';


export default class Books extends Component {
    constructor(props) {
        super(props);
        this.changePrice = this.changePrice.bind(this)
        this.refreshData = this.refreshData.bind(this);
    }

    refreshData(e) {
        console.log(books);
        stores.dispatch({ type: actions.BOOKS_DOWNLOAD, books })
    }

    changePrice(e, book) {
        stores.dispatch({ type: actions.BOOKS_UPDATE, book })
    }

    deleteBook(e, book) {
        stores.dispatch({ type: actions.BOOKS_DELETE, id: book.id })
    }

    componentDidMount() {
        stores.dispatch({ type: actions.BOOKS_DOWNLOAD, books })
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
                    {stores.getState().book.books.map(el=>
                        <li style={styles.row} key={el.id}>
                            <span style={styles.show}>{el.name}</span>
                            <span style={styles.show}>{el.price}</span>
                            <RaisedButton style={styles.btn} onClick={(e)=>{this.changePrice(e,el)}}>add price 100 once </RaisedButton>
                            <RaisedButton style={styles.btn} onClick={(e)=>{this.deleteBook(e,el)}} secondary={true}>delete</RaisedButton>
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
    btn: {
        width: 150
    },
    grid: {
        padding: '10px 0',
        background: '#eee'
    },
    row: {
        padding: '10px'
    }
}
