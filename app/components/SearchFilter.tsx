type PostFilter = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const SearchFilter = ({ searchQuery, onSearchChange }: PostFilter) => {
  return (
    <div className="mx-auto mb-16 max-w-xl">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles by keyword, title, or topic..."
          className="w-full rounded-xl border border-warm-600 bg-warm-900/20 py-3 pr-4 pl-4 text-sm text-warm-50 placeholder-warm-500 backdrop-blur-md transition-colors focus:border-accent-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
