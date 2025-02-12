import { JSX, useState } from 'react';
import './Main.css';

function MainContent() {
  console.log('first render');
  // const ingredients = new Set(["chicken", "oregano", "Tomatoes"]);
  const [ingredientsList, setIngredientsList] = useState<Set<string>>(new Set([]))

  function setIngerdients(ingredients: string[]): JSX.Element[] {
    return ingredients.map((ingredient) => (
      <li key={ingredient} className="text-capitalize">{ingredient}</li>
    ));
  }

  function handleAddIngredient(e: any): void {
    e.preventDefault();
    console.log('Add ingredient');
  
    const formData = new FormData(e.target as HTMLFormElement);
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
      <form action=""
        className="add-ingredient-form flex-row gap-1"
        onSubmit={handleAddIngredient}
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
      <section>
        <h2>Ingredients</h2>
        <ul>
          {setIngerdients([...ingredientsList])}
        </ul>
      </section>
    </main>
  );
}

export default MainContent;