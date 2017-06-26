import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AvFastForward from 'material-ui/svg-icons/av/fast-forward';
import AvFastRewind from 'material-ui/svg-icons/av/fast-rewind';
import NavLink from 'react-router-dom/NavLink';
import Scenes from '../../scenes/';


export default class PageTab extends Component {
    constructor(props) {
        super(props)
        this.state = { value: 1 }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, index, value) {
        this.setState({ value })
    }

    render() {
        return (
            <div style={styles.pagetab}>
                <Toolbar style={styles.toolbar} className="clearfix">
                    
                </Toolbar>
                <article style={styles.tabpage}>
                    <Scenes />
                </article>
            </div>
        )
    }
}

var styles = {
    pagetab: {
        position: 'relative',
        height: '100%'
    },
    toolbar: {
        height: 40,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        padding: 0,
        background: 'transparent',
        borderBottom: 'solid 2px #234658'
    },
    tabpage: {
        position: 'absolute',
        left: 0,
        top: 40,
        right: 0,
        bottom: 0
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
    }
}
