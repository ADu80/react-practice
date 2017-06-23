import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import NavLink from 'react-router-dom/NavLink';
import ActionHome from 'material-ui/svg-icons/action/home';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import menus from './store';


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { menus };
        this.subMenuItemClick = this.subMenuItemClick.bind(this);
    }

    subMenuItemClick(e) {
        var id = e.target.getAttribute('data-id');
        this.setState((prevState, props) => {
            var preMenuitem = prevState.menus.find(el => el.checked),
                currMenuitem = prevState.menus.find(el => el.id == id);

            if (!preMenuitem) {
                currMenuitem.checked = true;
            } else if (preMenuitem.id === currMenuitem.id) {
                currMenuitem.checked = !preMenuitem.checked;
                preMenuitem.checked = false;
            } else {
                preMenuitem.checked = false;
                currMenuitem.checked = true;
            }

            return prevState;
        });
    }

    render() {
        return (
            <ul style={styles.menu}>
        {this.state.menus.map(el=>
            <li key={el.id} style={el.checked?styles.checked:styles.nochecked}>
                <NavLink style={styles.title} to={el.path} className="clearfix" data-id={el.id} onClick={this.subMenuItemClick}>
                   <ActionHome style={styles.leftIcon} />
                    <span style={styles.titleText}>{el.title}</span>
                    {el.checked?<NavigationExpandMore style={styles.rightIcon} />:
                    <NavigationChevronRight style={styles.rightIcon} />}
                </NavLink>
                <ul style={el.checked?styles.submenuVisible:styles.submenuNoVisible}>
                {el.subs.map(el2=>
                    <li key={el2.id}>
                        <NavLink style={styles.subTitle} to={el2.path}>{el2.title}</NavLink>
                    </li>)
                }
                </ul>
            </li>
        )}
        </ul>)
    }
}

var styles = {
    menu: {
        marginTop: 10,
        listStyle: 'none'
    },
    submenuVisible: {
        display: 'block',
        listStyle: 'none',
        paddingBottom: 8,
        borderLeft: 'solid 10px #193'
    },
    submenuNoVisible: {
        display: 'none',
        listStyle: 'none',
        paddingBottom: 8
    },
    checked: {
        background: '#203240',
        display: 'block'
    },
    nochecked: {

    },
    title: {
        display: 'block',
        color: '#abe',
        verticalAlign: 'middle',
        paddingTop: 10,
        paddingBottom: 10,
        textDecoration: 'none'
    },
    titleText: {
        overflow: 'hidden'
    },
    leftIcon: {
        color: '#abe',
        verticalAlign: 'middle',
        float: 'left',
        marginLeft: 10,
        marginRight: 10
    },
    rightIcon: {
        color: '#abe',
        verticalAlign: 'middle',
        float: 'right',
        marginRight: 10
    },
    subTitle: {
        display: 'block',
        color: '#abe',
        verticalAlign: 'middle',
        marginLeft: 50,
        paddingTop: 8,
        paddingBottom: 8,
        textDecoration: 'none'
    }
}
