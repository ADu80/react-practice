import React, { Component } from 'react';
import TabPage from '../../components/TabPage';
import styles from './index.css';
import store from '../../stores';


var books = store.getState();

export default () =>
<article className="tab-content">
	<ul className="books">
	{books.map(el=>
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
