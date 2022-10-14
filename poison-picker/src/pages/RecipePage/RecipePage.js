import React, { useMemo } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Recipe from '../../components/Recipe/Recipe';
import { getCocktailRecipe } from '../../scripts/network-functions';

const RecipePage = () => {
  const { drinkId } = useParams();
  const { data, error } = useQuery("recipe", () => getCocktailRecipe(drinkId ?? ""))
  console.log('data', data);
  
  const recipe = useMemo(() => {
    if (!data) return;
    return data.drinks[0];
  }, [data]);

  if (!data) return <h2>Loading...</h2>;
  if (error) return <h2>an unknown error has occurred</h2>;


  return (
    <div>{recipe && <Recipe recipe={recipe} />}</div>
  )
}

export default RecipePage