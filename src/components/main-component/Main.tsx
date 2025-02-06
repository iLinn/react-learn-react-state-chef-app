import './Main.css';
import Card from '../card/Card';


function MainContent() {

  return (
    <main className="flex-grow-1 box-shadow">
      <form action="" className="add-ingredient-form flex-row gap-1">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          className="flex-grow-1"
        />
        <button>Add ingredient</button>
      </form>
    </main>
  );
}

export default MainContent;