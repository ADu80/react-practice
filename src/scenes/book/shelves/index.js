import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import shelves from './shelves'
import styles from './index.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'


class ShelvesApp extends Component {
    constructor(props) {
        super(props)
        this.refreshData = this.refreshData.bind(this)
    }

    refreshData(e) {
        console.log(shelves)
        this.props.fetchShelves(shelves)
    }

    changePrice(e, shelf) {
        shelf.price += 100
        this.props.UpdateShelf(shelf)
    }

    componentDidMount() {
        this.refreshData()
    }

    render() {
        const { shelves } = this.props
        console.log(shelves)
        return (
            <article>
                <section className={styles.toolbar}>
                    <RaisedButton primary={true}>新增</RaisedButton>
                    <RaisedButton onClick={this.refreshData}>刷新</RaisedButton>
                </section>
                <section>
                    <ul className={styles.grid}>
                    {shelves.map(el=>
                        <li className={styles.row} key={el.id}>
                            <span className={styles.show}>{el.brand}</span>
                            <span className={styles.show}>{el.price}</span>
                            <RaisedButton className={styles.show} onClick={(e)=>{this.changePrice(e,el)}}>add price 100 once </RaisedButton>
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
        shelves: state.book.shelves
    }
}

var mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelvesApp)
