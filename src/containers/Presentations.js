import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ presentations }) => (
  <div>
    <h1>Presentations</h1>
    <ul>
      {presentations.map(p => (
        <li key={p.id}>
          
        </li>
      ))}
    </ul>
  </div>
))
