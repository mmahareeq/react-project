import React from 'react'
import {Link} from 'react-router-dom'


export default function Cocktail({ image, name, id, info, glass }) {
    return (
        <div className="cocaktail">
            <img src={image} alt={image }/>
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
            <Link to={`/cocktail/${id}`}>Details </Link>
            
        </div>
    )
}
