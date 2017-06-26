import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Animate } from 'react-move';
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
        this.selectSubMenuItem = this.selectSubMenuItem.bind(this);
    }

    selectSubMenuItem(item) {
        var id = item.id;
        this.setState((prevState, props) => {
            var preMenuitem = prevState.menus.find(el => el.checked),
                currMenuitem = prevState.menus.find(el => el.id == id);

            currMenuitem.checked = preMenuitem && preMenuitem.id === currMenuitem.id ? !preMenuitem.checked : true;
            if (preMenuitem) preMenuitem.checked = false;

            return prevState;
        });
    }

    render() {
        return (
            <ul style={styles.menu}>
        {this.state.menus.map(el=>
            <li key={el.id} style={el.checked?styles.checked:styles.nochecked}>
                <a style={styles.title} className="clearfix" data-id={el.id} onClick={(e)=>{this.selectSubMenuItem(el)}}>
                   <ActionHome style={styles.leftIcon} />
                    <span style={styles.titleText}>{el.title}</span>
                    {el.checked?<NavigationExpandMore style={styles.rightIcon} />:
                    <NavigationChevronRight style={styles.rightIcon} />}
                </a>
                <Animate default={{height:0}}
                    data={{checked:el.checked,height:el.checked?el.subs.length*34+15:0}}
                >
                {(data)=>(
                    <ul style={styles.submenuVisible}>
                    {el.subs.map(el2=>
                        <li key={el2.id}>
                            <NavLink style={styles.subTitle} to={el2.path}>{el2.title}</NavLink>
                        </li>)
                    }
                    </ul>
                )}
                </Animate>
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
        paddingBottom: 15,
        borderLeft: 'solid 5px #193'
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
        textDecoration: 'none',
        cursor: 'pointer'
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
