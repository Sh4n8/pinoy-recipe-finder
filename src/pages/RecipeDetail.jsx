import { useMemo } from "react";
import { useParams } from "react-router-dom";
import data from "../data/recipe.json"; // Make sure it's .json
import { useFavorites } from "../store/FavoritesContext.jsx";

export default function RecipeDetail() {
  const { id } = useParams();
  const numericId = Number(id);

  const recipes = Array.isArray(data) ? data : data?.recipes || [];

  const recipesWithImages = recipes.map((r) => ({
    ...r,
    image: r.image
      ? new URL(`../assets/${r.image}`, import.meta.url).href
      : null,
  }));

  const recipe = useMemo(() => {
    return recipesWithImages.find((r) => Number(r.id) === numericId);
  }, [numericId, recipesWithImages]);

  const { isFav, toggle } = useFavorites();

  if (!recipe) {
    return (
      <div className="alert alert-warning">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="row g-4">
      <div className="col-12 col-lg-5">
        {recipe.image ? (
          <img
            src={recipe.image}
            className="img-fluid rounded shadow-sm"
            alt={recipe.name}
          />
        ) : (
          <div
            className="bg-light rounded d-flex align-items-center justify-content-center"
            style={{ height: 260 }}
          >
            <span className="text-muted">No Image</span>
          </div>
        )}
      </div>

      <div className="col-12 col-lg-7">
        <h1 className="h3">{recipe.name}</h1>
        {recipe.description && (
          <p className="text-muted">{recipe.description}</p>
        )}
        <button
          type="button"
          className={`btn ${
            isFav(recipe.id) ? "btn-outline-dark" : "btn-dark"
          } mt-2`}
          onClick={() => toggle(recipe.id)}
        >
          {isFav(recipe.id) ? "Remove from Favorites" : "Add to Favorites"}
        </button>

        <div className="mt-4">
          <h2 className="h5">Ingredients</h2>
          <ul className="mt-2">
            {recipe.ingredients?.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="h5">Instructions</h2>
          {Array.isArray(recipe.instructions) ? (
            <ol className="mt-2">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="mb-2">
                  {step}
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-2">{recipe.instructions}</p>
          )}
        </div>
      </div>
    </div>
  );
}
