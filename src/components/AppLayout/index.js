import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Avatar from 'material-ui/Avatar'
import Menu from '../Menu'
import PageTab from '../PageTab'
import styles from './index.css'


export default () =>
<MuiThemeProvider>
    <article>
        <header className={styles.topbar}>
        </header>
        <aside className={styles.sidebar}>
            <header className={styles.sidebar__top}>
                <Avatar src={require('./boy.png')} />
            </header>
            <nav className={styles.sidebar__nav}>
                <Menu />
            </nav>
        </aside>
        <article className={styles.main}>
            <PageTab />
        </article>
        <footer className={styles.footer}>
        </footer>   
    </article>
</MuiThemeProvider>
