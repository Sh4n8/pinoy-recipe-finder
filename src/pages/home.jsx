import { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
import data from "../data/recipes.json"; 

export default function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  
  useEffect(() => {
    setRecipes(Array.isArray(data) ? data : data?.recipes || []);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recipes;
    return recipes.filter((r) => r.name.toLowerCase().includes(q));
  }, [recipes, query]);

  return (
    <>
      <div className="d-flex flex-column gap-3 mb-4">
        <h1 className="h3 m-0">Classic Filipino Recipes</h1>
        <SearchBar value={query} onChange={setQuery} />
        <div className="text-muted small">
          Showing <strong>{filtered.length}</strong> of {recipes.length} recipe{recipes.length === 1 ? "" : "s"}
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
