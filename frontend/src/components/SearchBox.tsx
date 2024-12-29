export const SearchBox = () => {
  return (
    <div className="search-box">
      <div>
        <input
          className="border p-1 rounded-md outline-none border-gray-500"
          type="text"
          placeholder="Search note..."
        />
      </div>
    </div>
  );
};
