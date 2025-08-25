import { Outlet } from "react-router-dom";
import Header from "./header.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="py-4">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="py-4 border-top bg-light">
        <div className="container text-center small text-muted">
          Built with React, Vite, and Bootstrap.
        </div>
      </footer>
    </>
  );
}
