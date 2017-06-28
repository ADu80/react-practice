import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import NavLink from 'react-router-dom/NavLink';
import Scenes from '../../scenes/';
import styles from './index.css';

export default class PageTab extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.pagetab}>
                <ul className={styles.toolbar+' clearfix'}>
                    <li className={styles.pagtab__Left}>
                        <a className={styles.link}>
                            <i className="fa fa-backward"></i>
                        </a>
                    </li>
                    <li className={styles.pagetab__right}>
                        <a className={styles.link}>
                            <i className="fa fa-forward"></i>
                        </a>
                    </li>
                    <li className={styles.pagetab__mid}>
                        <ul className="clearfix">
                            <li className={styles.pagetab__title}>
                                <NavLink className={styles.navlink} to="page101">
                                    <span style={inlineStyles.middle}>page101</span>
                                    <i className="fa fa-times-circle" style={inlineStyles.middle}></i>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <article className={styles.pagetab__page}>
                    <Scenes />
                </article>
            </div>
        )
    }
}

var tabColor = '#aaa';

var inlineStyles = {
    avIcon: {
        verticalAlign: 'middle',
        color: tabColor
    },
    dropDownMenu: {
        width: 200,
        marginRight: 0,
        borderLeft: 'solid 1px #eee'
    },
    iconButtonLeft: {
        borderRight: 'solid 1px #eee'
    },
    iconButtonRight: {
        borderLeft: 'solid 1px #eee'
    },
    middle: {
        verticalAlign: 'middle',
        marginLeft: 5
    }
}
