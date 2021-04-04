import React from 'react'
import {useState ,useContext ,useEffect} from 'react';
import {useCallback} from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const contextd = React.createContext();

 const  AppContext =({children })=>{

  const [loading,setloading] = useState(true);
  const [searchco , setseacrchco] = useState('a');
  const [cocktail , setcocktail] = useState([]);

  const fetchdrink = useCallback(
    async() => {
      setloading(true)
      try
      {
        const response = await fetch(`${url}${searchco}`)
        const data = await response.json()
        console.log(data);

        const { drink } = data;
        if (drink) {
        const newCocktails = drink.map((item) => {
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
            }})
          setcocktail(newCocktails)
          }
          else{
            setcocktail([])
          }
          setloading(false)
        }
        catch (error) {
          console.log(error)
          setloading(false)
        }
      },[searchco]
  )

  useEffect(() => {
    fetchdrink()
    
  }, [searchco,fetchdrink])



    return (
        <contextd.Provider  value={{ loading, cocktail, searchco, setseacrchco }}>
          {children}
        </contextd.Provider>
    )
}

export const  useGlobalContext =() =>
{
  return useContext(contextd)
}
export{contextd,AppContext}