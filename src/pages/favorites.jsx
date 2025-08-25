import { useMemo } from "react";
import { useFavorites } from "../store/FavoritesContext.jsx";
import data from "../data/recipes.json";
import RecipeCard from "../components/RecipeCard.jsx";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { favorites } = useFavorites();
  const recipes = Array.isArray(data) ? data : data?.recipes || [];

  const favRecipes = useMemo(() => recipes.filter((r) => favorites.includes(r.id)), [recipes, favorites]);

  if (favRecipes.length === 0) {
    return (
      <div className="text-center">
        <h1 className="h4">No favorites yet</h1>
        <p className="text-muted">Add some dishes you like, para may babalikan ka.</p>
        <Link to="/" className="btn btn-dark">Browse Recipes</Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="h3 mb-3">Your Favorites</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {favRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
