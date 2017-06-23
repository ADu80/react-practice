import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Menu from '../Menu';
import PageTab from '../PageTab';


export default () =>
<MuiThemeProvider>
    <article>
        <header style={styles.topbar}>
        </header>
        <aside style={styles.sidebar}>
            <header style={styles.sidebar__top}>
                <Avatar src={'./boy.png'} />
            </header>
            <nav style={styles.sidebar__nav}>
                <Menu />
            </nav>
        </aside>
        <article style={styles.main}>
            <PageTab />
        </article>
        <footer style={styles.footer}>
        </footer>   
    </article>
</MuiThemeProvider>

var styles = {
    topbar: {
        height: '60px',
        position: 'fixed',
        left: '200px',
        right: 0,
        top: 0,
        background: '#f2f4f6'
    },
    sidebar: {
        position: 'fixed',
        width: '200px',
        left: 0,
        top: 0,
        bottom: 0,
        background: '#2f4050'
    },
    sidebar__top: {
        height: 100,
        background: '#203240'
    },
    main: {
        position: 'fixed',
        left: '200px',
        top: '60px',
        bottom: '40px',
        right: 0,
        overflow: 'hidden'
    },
    footer: {
        position: 'fixed',
        height: '40px',
        left: '200px',
        bottom: 0,
        right: 0,
        background: '#f2f4f6'
    }
}
