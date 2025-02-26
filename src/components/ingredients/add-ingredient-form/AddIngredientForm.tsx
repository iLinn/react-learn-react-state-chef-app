
export default function AddIngredientForm({ onAddIngredient }: { onAddIngredient: (e: FormData) => void }) {
  return(
    <form action={onAddIngredient}
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
  );
}