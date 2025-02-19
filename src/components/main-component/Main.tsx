import { JSX, useState } from 'react';
import './Main.css';
import Recipe from '../recipe-mock/Recipe';
import Loading from '../loading/Loading';

function MainContent() {
  const [ingredientsList, setIngredientsList] = useState<Set<string>>(new Set([]));
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipeRequested, setRecipeRequested] = useState(false);

  function setIngerdients(ingredients: string[]): JSX.Element[] {
    return ingredients.map((ingredient) => (
      <li key={ingredient} className="text-capitalize">{ingredient}</li>
    ));
  }

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
        <form action={handleAddIngredient}
          className="add-ingredient-form flex-row gap-1"
          // onSubmit={handleAddIngredient}
        >
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            className="flex-grow-1"
            name="ingredient"
          />
          <button 
            className="plus-icon"
          >Add ingredient</button>
        </form>
        {(ingredientsList.size > 0) && <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {setIngerdients([...ingredientsList])}
          </ul>
          {ingredientsList.size > 2 ? <div className="get-recipe-container flex-row gap-1 box-shadow">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button
              onClick={handleRequestRecipe}
              className="material-ui-button">
                Get a recipe
            </button>
          </div> : <p className="fs-italic">Add more ingredients to get a recipe suggestion.</p>}
        </section>}
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