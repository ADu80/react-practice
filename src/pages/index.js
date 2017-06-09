import Page1 from './Page1';
import Page2 from './Page2';


var pages = [
    { id: 1, title: 'page1', path: '/page1', page: new Page1() },
    { id: 2, title: 'page2', path: '/page2', page: new Page2() }
];

export default pages;
