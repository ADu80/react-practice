import React from 'react';
import Route from 'react-router-dom/Route';


const Page101 = () =>
    <article>
	This is page101.
</article>

const Page102 = () =>
    <article>
	This is page102.
</article>

const Page201 = () =>
    <article>
	This is page201.
</article>

const Page202 = () =>
    <article>
	This is page202.
</article>

const Page301 = () =>
    <article>
	This is page301.
</article>

const Page302 = () =>
    <article>
	This is page302.
</article>


export default () =>
<div>
	<Route path="/page101" component={Page101} />
	<Route path="/page102" component={Page102} />
	<Route path="/page201" component={Page201} />
	<Route path="/page202" component={Page202} />
	<Route path="/page301" component={Page301} />
	<Route path="/page302" component={Page302} />
</div>
