import { useState } from 'react';
import './Main.css';
import Recipe from '../recipe/Recipe';
import Loading from '../shared/loading/Loading';
import AddIngredient from '../ingredients/add-ingredient-form/AddIngredientForm';
import IngredientsList from '../ingredients/ingredients-list/IngredientsList';
import { getRecipeFromMistral } from '../../ai';

const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN;
const REACT_APP_HF_ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_HF_ACCESS_TOKEN;

console.log('VITE_HF_ACCESS_TOKEN', HF_ACCESS_TOKEN);
console.log('VITE_REACT_APP_HF_ACCESS_TOKEN', REACT_APP_HF_ACCESS_TOKEN);

function MainContent() {

  const [ingredientsList, setIngredientsList] = useState<Set<string>>(new Set([]));
  const [recipeRequested, setRecipeRequested] = useState(false);
  const [recipe, setRecipe] = useState<string>('');

  function handleAddIngredient(formData: FormData): void {
    // e.preventDefault();
    console.log('Add ingredient');
  
    // const formData = new FormData(e.target as HTMLFormElement);
    const ingredient = formData.get('ingredient') as string;

    if (ingredient) {
      // use state
      setIngredientsList(prevList => {
        const newList = new Set(prevList);
        newList.add(ingredient.toLowerCase());
        return newList;
      });
    }

    console.log('Added', ingredientsList, ingredient);
  }

  function handleRequestRecipe(): void {
    setRecipeRequested(true);
    getRecipeFromMistral([...ingredientsList]).then((response) => {
      console.log(response);
      const newRecipe = response || 'No recipe found';
      setRecipe(newRecipe);
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
      console.log('FINALLY');
    });

    // await const recipeMarkdown = getRecipeFromMistral([...ingredientsList]);
  }

  function handleResetForm(): void {
    setIngredientsList(new Set([]));
    setRecipeRequested(false);
    setRecipe('');
  }

  return (
    <main className="flex-grow-1 box-shadow">
      {(!recipe && !recipeRequested) && <>
        <AddIngredient onAddIngredient={handleAddIngredient} />
        {(ingredientsList.size > 0) && <IngredientsList ingredients={ingredientsList} onRequestRecipe={handleRequestRecipe} />}
      </>}
      {(recipe && recipeRequested) && <>
        <Recipe recipeMarkdown={recipe}/>
        <button
          className="material-ui-button"
          onClick={handleResetForm}
        >Get another recipe</button>
      </>}
      {(!recipe && recipeRequested) && <section>
        <Loading />
      </section>}
    </main>
  );
}

export default MainContent;