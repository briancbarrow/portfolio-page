import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ presentations }) => (
    <div id="presentationPage">
        <h1>Presentations</h1>  
        <p>Here are a couple of my presentations and screencast instructional videos I've done.</p>
        <ul className="presentations">
            {presentations.map(p => (
                <li className="presentation" key={p.name}>
                    <Link to={p.link}>
                        <h2 className="presentation-header">{ p.name }</h2>
                        <img alt={p.text} src={require("../images/" + p.image) } />
                        <p className="desc">{ p.text }</p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
))
