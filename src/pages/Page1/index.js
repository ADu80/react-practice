import React, { Component } from 'react';
import TabPage from '../../components/TabPage';
import styles from './index.css';
import store from '../../stores';


var books = [
    { id: 'b0001', name: 'C++ MFC', price: 50 },
    { id: 'b0002', name: 'ASP.NET MVC', price: 50 },
    { id: 'b0003', name: 'Javascript High Design', price: 50 },
    { id: 'b0004', name: 'Nodejs', price: 50 },
    { id: 'b0005', name: 'MongoDB', price: 50 },
    { id: 'b0006', name: 'React & Redux', price: 50 },
    { id: 'b0007', name: 'Responsive Web Design', price: 50 },
    { id: 'b0008', name: 'How to write js', price: 50 },
    { id: 'b0009', name: 'Functional js', price: 50 },
    { id: 'b0010', name: 'C# deepin', price: 50 }
];

export default () =>
<article className="tab-content">
	<div className="btn-group">
		<button className="btn btn-primary" 
			onClick={()=>store.dispatch({type:'BOOKS_ADD'})}>Add</button>
	</div>
	<ul className="books">
	{books.map(el=>
		<li key={el.id} className="item clearfix"><a className="name" href="#">{el.name}</a><span className="price">{el.price}</span></li>
		)
	}
	</ul>
</article>
