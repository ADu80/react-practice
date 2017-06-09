import React, { Component } from 'react';
import TabPage from '../../components/TabPage';
import styles from './index.css';
import store from '../../stores';


var booksState = store.getState();

export default class Page1 extends Component {
    constructor(props) {
        super(props);
        this.addBook = this.addBook.bind(this);
        this.delBook = this.delBook.bind(this);
    }

    addBook(e) {
        e.preventDefault();
        // console.log(e.currentTarget);
        store.dispatch({ type: 'BOOKS_ADD', book: { id: 'b1000', name: 'C# Good Good Good', price: 80 } })
    }

    delBook(e) {
        store.dispatch({ type: 'BOOKS_DELETE', id: 'b0001' })
    }


    render() {
        return (
            <article className="tab-content">
				<form className="form-horizontal" onSubmit={this.addBook}>
					<article className="form-group">
					  	<label className="col-sm-2 control-label" htmlFor="txt_bookid">bookid:</label>
					  	<div className="col-sm-10">
					  		<input className="form-control" id="txt_bookid" type="text" />
				  		</div>
					</article>
					<article className="form-group">
					  	<label className="col-sm-2 control-label" htmlFor="txt_bookname">bookname:</label>
					  	<div className="col-sm-10">
					  		<input className="form-control" id="txt_bookname" type="text" />
				  		</div>
					</article>
					<article className="form-group">
					  	<label className="col-sm-2 control-label" htmlFor="txt_bookprice">price:</label>
					  	<div className="col-sm-10">
					  		<input className="form-control" id="txt_bookprice" type="text" />
				  		</div>
					</article>
					<article className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-primary">添加</button>
							<button type="button" className="btn btn-danger" onClick={this.delBook}>删除</button>
						</div>
					</article>
				</form>				
				<ul className="books">
				{booksState.map(el=>
					<li key={el.id} className="item clearfix">
						<a className="name" href="#">{el.name}</a>
						<span className="price">{el.price}</span>		
						<div className="btn-group">
							<button className="btn btn-primary" 
								onClick={()=>store.dispatch({type:'BOOKS_UPDATE',book:el})}>Change Price</button>
						</div>
					</li>
					)
				}
				</ul>
			</article>
        )
    }
}
