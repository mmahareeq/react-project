import React from 'react';
import {Link} from 'react-router-dom';


export default function header() {
    return (
        <div className="header">
            <div><h2> <Link to="/" style={{textDecoration:'none'}}>The cocktailDB</Link></h2> </div>
            <div className="left-header">
                <span><Link to="/" style={{textDecoration:'none'}}>Home</Link></span>
                <span><Link to="/About" style={{textDecoration:'none'}}>About</Link></span>
            </div>            
        </div>
    )
}
