import { useState } from 'react';
import './Main.css';
import Recipe from '../recipe-mock/Recipe';
import Loading from '../shared/loading/Loading';
import AddIngredient from '../ingredients/add-ingredient-form/AddIngredientForm';
import IngredientsList from '../ingredients/ingredients-list/IngredientsList';

function MainContent() {
  const [ingredientsList, setIngredientsList] = useState<Set<string>>(new Set([]));
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipeRequested, setRecipeRequested] = useState(false);

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
    setTimeout(() => {
      setRecipeShown(true);
    }, 2000);
  }

  function handleResetForm(): void {
    setIngredientsList(new Set([]));
    setRecipeShown(false);
    setRecipeRequested(false);
  }

  return (
    <main className="flex-grow-1 box-shadow">
      {(!recipeShown && !recipeRequested) && <>
        <AddIngredient onAddIngredient={handleAddIngredient} />
        {(ingredientsList.size > 0) && <IngredientsList ingredients={ingredientsList} onRequestRecipe={handleRequestRecipe} />}
      </>}
      {(recipeShown && recipeRequested) && <section>
        <Recipe />
        <button
          className="material-ui-button"
          onClick={handleResetForm}
        >Get another recipe</button>
      </section>}
      {(!recipeShown && recipeRequested) && <section>
        <Loading />
      </section>}
    </main>
  );
}

export default MainContent;