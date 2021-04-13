import React from 'react'
import Cocktail from './Cocktail.js'
import Loading from './Loading.js'

import {useContext} from 'react';
import {AppContext} from '../Context';

export default function Cocajtaillist() {
  const themeContext = useContext(AppContext);
  const coktail = themeContext.cocktails;
    return (
        <section className='section'>
          {console.log(themeContext.cocktails)}
        
        <div className='cocktails-center'>
          
        {coktail.map((item) => {
            return <Cocktail key={item.id} {...item} />
           //console.log(item)
          })}
        </div>
      </section>
        
    )
}
