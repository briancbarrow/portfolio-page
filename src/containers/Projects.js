import React from 'react'
import { withRouteData, Link } from 'react-static'

import FontAwesome from 'react-fontawesome'
//

export default withRouteData(({ projects }) => (
    <div id="projectsPage">
        <h1>Projects</h1>
        <ul id="projects">
            {projects.map(p => (
                <li className="project" key={p.name}>
                    <Link className="project-link" to={p.link}>
                        <h2 className="project-header">{ p.name }</h2>
                        <img className="project-image" src={require("../images/" + p.image) } alt={p.name} />
                    </Link>
                    <ul>
                        <li className="project-list">
                            <a href={p.link} target="_blank"><FontAwesome name='code' /> Demo</a>
                        </li>
                        <li className="project-list">
                            <a href={p.github} target="_blank"><FontAwesome name='github' /> Code</a>
                        </li>
                    </ul>
                    <hr />
                    <div className="project-tech">
                        <h3>Technologies used:</h3>
                        <ul>
                            {p.tech.map(tech => (
                                <li className="tech" key={`tech-${tech}`}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    </div>
))
