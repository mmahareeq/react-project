import React, { useState, useContext, useEffect } from 'react'

import {useCallback} from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
 export const AppContext = React.createContext()

 export  function AppProvider  ({ children }) {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])
    const [theme, setTheme] = useState('dark');
    const fetchDrinks = useCallback( async () => {
      setLoading(true)
      
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        console.log(data);
        const {drinks} = data ;
        if(drinks)
        {
          const newcocktail = drinks.map((item)=>
          {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = item
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            }
          })
          setCocktails(newcocktail);
        }
      },[searchTerm])
      useEffect(() => {
        fetchDrinks()
      }, [searchTerm,fetchDrinks])
    return (
        <AppContext.Provider
          value={{ loading, cocktails, searchTerm, setSearchTerm ,fetchDrinks}}
        >
          {children}
        </AppContext.Provider>
      )
}