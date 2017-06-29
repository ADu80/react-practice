import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import books from './books'
import styles from './index.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from './actions'


class Books extends Component {
    constructor(props) {
        super(props)
        this.refreshData = this.refreshData.bind(this)
    }

    refreshData(e) {
        console.log(this.props.DownloadBooks);
        this.props.DownloadBooks(books)
    }

    componentDidMount() {
        this.refreshData()
    }

    render() {
        const { books, UpdateBook, DeleteBook } = this.props
        return (
            <article>
                <section className={styles.toolbar}>
                    <RaisedButton primary={true}>新增</RaisedButton>
                    <RaisedButton onClick={this.refreshData}>刷新</RaisedButton>
                </section>
                <section>
                    <ul className={styles.grid}>
                    {books.map(el=>
                        <li className={styles.row} key={el.id}>
                            <span className={styles.show}>{el.name}</span>
                            <span className={styles.show}>{el.price}</span>
                            <RaisedButton className={styles.btn} onClick={(e)=>{UpdateBook(el)}}>add price 100 once </RaisedButton>
                            <RaisedButton className={styles.btn} onClick={(e)=>{DeleteBook(e,el)}} secondary={true}>delete</RaisedButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(Books)
