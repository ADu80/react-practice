import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Animate } from 'react-move';
import NavLink from 'react-router-dom/NavLink';
import menus from './store';
import styles from './index.css';


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: menus
        }
        this.selectSubMenuItem = this.selectSubMenuItem.bind(this);
    }

    selectSubMenuItem(item) {
        var id = item.id;
        this.setState((prevState, props) => {
            var preMenuitem = prevState.menus.find(el => el.checked),
                currMenuitem = prevState.menus.find(el => el.id === id),

                currChecked = preMenuitem && preMenuitem.id === currMenuitem.id ? !preMenuitem.checked : true

            if (preMenuitem) {
                preMenuitem.checked = false
            }

            currMenuitem.checked = currChecked

            return prevState
        });
    }

    render() {
        return (
            <ul className={styles.menu}>
            {this.state.menus.map(el=>
                <li key={el.id} className={el.checked?styles['menu__item--hecked']:''}>
                    <a className={styles['menu__title']+' clearfix'} onClick={(e)=>{this.selectSubMenuItem(el)}}>
                        <i className={'fa fa-home '+styles['menu__title__lefticon']}></i>
                        <span className={styles['menu__title__text']}>{el.title}</span>
                        {el.checked?<i className={'fa fa-angle-down '+styles['menu__title__righticon']}></i>:
                        <i className={'fa fa-angle-right '+styles['menu__title__righticon']}></i>}
                    </a>
                    <Animate default={{height:0}}
                        data={{height:el.checked?el.subs.length*32+15:0}}
                        duration="400"
                        easing="quadOut"
                    >
                    {(data)=>
                        <ul className={styles.submenu} style={{height:data.height}}>
                        {el.subs.map(el2=>
                            <li key={el2.id}>
                                <NavLink className={styles['submenu__title']} to={el2.path}>{el2.title}</NavLink>
                            </li>)
                        }
                        </ul>
                    }
                    </Animate>
                </li>
            )}
            </ul>
        )
    }
}
