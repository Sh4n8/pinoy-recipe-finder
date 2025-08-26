import { Link, NavLink } from "react-router-dom";
import { useFavorites } from "../store/FavoritesContext.jsx";

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Pinoy Recipe Finder 🇵🇭
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink end to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favorites" className="nav-link">
                Favorites <span className="badge text-bg-dark ms-1">{favorites.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
