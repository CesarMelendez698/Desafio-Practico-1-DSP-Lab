function SearchBar({ value, onChange }) {
  return (
    <div className="card">
      <input
        type="text"
        placeholder="Buscar contacto..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;