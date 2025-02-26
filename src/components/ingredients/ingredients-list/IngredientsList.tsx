import { JSX } from 'react';

export default function IngredientsList({ ingredients, onRequestRecipe }: { ingredients: Set<string>, onRequestRecipe: () => void }): JSX.Element {
  function setIngerdients(ingredients: string[]): JSX.Element[] {
    return ingredients.map((ingredient) => (
      <li key={ingredient} className="text-capitalize">{ingredient}</li>
    ));
  }

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {setIngerdients([...ingredients])}
      </ul>
      {ingredients.size > 2 ? <div className="get-recipe-container flex-row gap-1 box-shadow">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button
          onClick={onRequestRecipe}
          className="material-ui-button">
            Get a recipe
        </button>
      </div> : <p className="fs-italic">Add more ingredients to get a recipe suggestion.</p>}
    </section>
  );
}