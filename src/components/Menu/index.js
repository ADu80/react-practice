import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';


var menus = [{
    id: 1,
    title: 'page1',
    subs: [{
        id: 101,
        title: 'page101'
    }, {
        id: 102,
        title: 'page102'
    }]
}, {
    id: 2,
    title: 'page2',
    subs: [{
        id: 201,
        title: 'page201'
    }, {
        id: 202,
        title: 'page202'
    }]
}];

export default () =>
<ul style={styles.menu}>
{menus.map(el=>
	<li key={el.id} >
		<h3 style={styles.title}>{el.title}</h3>
		<ul style={styles.submenu}>
		{el.subs.map(el2=>
			<li key={el2.id}>
				<h3 style={styles.title}>{el2.title}</h3>
			</li>
			)
		}
		</ul>
	</li>
)}
</ul>

var styles = {
    menu: {
        listStyle: 'none',
    },
    submenu: {
        listStyle: 'none',
    },
    title: {
        color: '#abe'
    }
}
