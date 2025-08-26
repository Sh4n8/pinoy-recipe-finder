export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="form-control form-control-lg"
      type="search"
      placeholder="Search recipes (e.g., adobo, sinigang, kare-kare)…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
