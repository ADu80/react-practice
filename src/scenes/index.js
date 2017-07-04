import React, { Component } from 'react'
import Route from 'react-router-dom/Route'
import { Animate } from 'react-move'
import { Books, Shelves } from './book'


const Page101 = () => <Books />

const Page102 = () => <Shelves />

const Page103 = () =>
    <article>
    This is page103.
</article>

const Page104 = () =>
    <article>
    This is page104.
</article>

const Page201 = () =>
    <article>
    This is page201.
</article>

const Page202 = () =>
    <article>
    This is page202.
</article>

const Page203 = () =>
    <article>
    This is page203.
</article>

const Page204 = () =>
    <article>
    This is page204.
</article>

const Page205 = () =>
    <article>
    This is page205.
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
