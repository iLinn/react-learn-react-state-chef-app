import ReactMarkdown from 'react-markdown';

export default function Recipe({ recipeMarkdown }: { recipeMarkdown: string }) {
  return (
    <section>
    <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
          <ReactMarkdown children={recipeMarkdown} />
          {/* <ReactMarkdown>{recipeMarkdown}</ReactMarkdown> */}
      </article>
    </section>
  );
}