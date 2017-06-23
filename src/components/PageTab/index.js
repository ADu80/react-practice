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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({ value })
    }

    render() {
        return (
            <div style={styles.pagetab}>
	            <Toolbar style={styles.toolbar}>
	    			<ToolbarGroup><IconButton style={styles.iconButton}><AvFastRewind /></IconButton></ToolbarGroup>
	    			<ToolbarGroup>
	    				<NavLink to='/page101'>page101</NavLink>
	    				<NavLink to='/page201'>page201</NavLink>
	    				<NavLink to='/page301'>page301</NavLink>
	    			</ToolbarGroup>
	    			<ToolbarGroup>
	    				<IconButton style={styles.iconButton}>><AvFastForward /></IconButton>
	    				<DropDownMenu
				          value={1}
				          onChange={this.handleChange}
				          style={styles.dropDownMenu}
				          autoWidth={false}
				        >
				          <MenuItem value={1} primaryText="Custom width" />
				          <MenuItem value={2} primaryText="Every Night" />
				          <MenuItem value={3} primaryText="Weeknights" />
				          <MenuItem value={4} primaryText="Weekends" />
				          <MenuItem value={5} primaryText="Weekly" />
				        </DropDownMenu>
	    			</ToolbarGroup>
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
        height: 56,
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
        top: 56,
        right: 0,
        bottom: 0
    },
    dropDownMenu: {
        width: 200,
        marginRight: 0
    },
    iconButton: {
        borderRight: 'solid 1px #eee'
    }
}
