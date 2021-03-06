import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import books from './books'
import styles from './index.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'


class BooksPage extends Component {
    constructor(props) {
        super(props)
        this.fetchBooks = this.fetchBooks.bind(this)
        this.changePrice = this.changePrice.bind(this)
    }

    fetchBooks(e) {
        this.props.fetchBooks(books)
    }

    changePrice(e, book) {
        book.price += 100
        this.props.updateBook(book)
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        setTimeout(()=>{
            this.fetchBooks()
        },3000);
        console.log('componentDidMount')
    }

    componentWillReceiveProps(e) {
        console.log('componentWillReceiveProps', e)
    }

    shouldComponentUpdate(e) {
        console.log('shouldComponentUpdate', e)
        return true
    }

    componentWillUpdate(e) {
        console.log('componentWillUpdate', e)
    }

    componentDidUpdate(e) {
        console.log('componentDidUpdate', e)
    }

    componentWillUnmount(e) {
        console.log('componentWillUnmount', e)
    }

    render() {
        console.log('render')
        const { books, deleteBook } = this.props
            // console.log(books)
        return (
            <article>
                <section className={styles.toolbar}>
                    <RaisedButton primary={true}>新增</RaisedButton>
                    <RaisedButton onClick={this.fetchBooks}>查询</RaisedButton>
                    <input type="text" />
                </section>
                <section>
                    <ul className={styles.grid}>
                    {books.map(el=>
                        <li className={styles.row} key={el.id}>
                            <span className={styles.show}>{el.name}</span>
                            <span className={styles.show}>{el.price}</span>
                            <RaisedButton className={styles.btn} 
                            onClick={(e)=>{this.changePrice(e,el)}}>add price 100 once </RaisedButton>
                            <RaisedButton className={styles.btn} 
                            onClick={(e)=>{deleteBook(el)}} secondary={true}>delete</RaisedButton>
                        </li>
                    )}
                    </ul>
                </section>
            </article>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        books: state.book.books
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage)
