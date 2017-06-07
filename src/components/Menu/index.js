import React, { Component } from 'react';
import styles from './index.css';
import { Link } from 'react-router-dom';
import pages from '../../pages';


export default () =>
<ul>
{
	pages.map(el=>
	<li key={el.id} className="item">
		<Link className="link" to={el.path}>{el.title}</Link>
	</li>)
}
</ul>
