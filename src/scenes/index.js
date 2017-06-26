import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import { Animate } from 'react-move'


class Page101 extends Component {
    constructor(props) {
        super(props)
        this.state = { height: 40 }
    }
    render() {
        return (
            <article>
				<h1>This is page101.</h1>
				<button onClick={(e)=>{
					this.setState({height:100})
				}}>change</button>
				<Animate
				  // Set some default data
				  default={{
				    scale: 0,
				    color: 'blue',
				    height:40
				  }}
				  // Update your data to whatever you want
				  data={{
				    scale: Math.random() * 1,
				    color: _.sample(['red', 'blue', 'yellow']),
				    height:this.state.height
				  }}
				  duration={800}
				  // anything from https://github.com/d3/d3-ease
				  easing='easeQuadIn' 
				>
				  {data => (
					    <div
					      style={{
					        transform: `scale(${data.scale})`,
					        background: data.color,
					        height:data.height
					      }}
					    >
					      {data.scale * 100}
					    </div>
				  )}
				</Animate>
			</article>
        )
    }
}
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
