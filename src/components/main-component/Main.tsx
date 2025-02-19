import { JSX, useState } from 'react';
import './Main.css';

function MainContent() {
  const [ingredientsList, setIngredientsList] = useState<Set<string>>(new Set([]))

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

  return (
    <main className="flex-grow-1 box-shadow">
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
        <div className="get-recipe-container flex-row gap-1 box-shadow">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="material-ui-button">Get a recipe</button>
        </div>
      </section>}
    </main>
  );
}

export default MainContent;