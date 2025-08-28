import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const { id, name, image, description } = recipe;

  const imagePath = image ? `/assets/${image}` : null;

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        {imagePath ? (
          <img
            src={imagePath}
            className="card-img-top object-fit-cover"
            style={{ height: 180 }}
            alt={name}
          />
        ) : (
          <div
            className="bg-light d-flex align-items-center justify-content-center"
            style={{ height: 180 }}
          >
            <span className="text-muted">No Image</span>
          </div>
        )}

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          {description && (
            <p className="card-text text-muted small flex-grow-1">
              {description}
            </p>
          )}
          <Link to={`/recipe/${id}`} className="btn btn-dark mt-2 w-100">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
