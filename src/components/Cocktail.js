import React ,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {AppContext} from '../Context';


export default function Cocktail(props) {
    const themeContext = useContext(AppContext);
    
    return (
        
        
        <article className='cocktail'>
      <div className='img-container'>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{props.name}</h3>
        <h4>{props.glass}</h4>
        <p>{props.info}</p>
        <Link to={`/cocktail/${props.id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
    )
}
//{ image, name, id, info, glass }<img src={image} alt={image }/>
           // <h3>{name}</h3>
            //<h4>{glass}</h4>
            //<p>{info}</p>