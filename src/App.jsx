import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/home.jsx";
import Favorites from "./pages/favorites.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
