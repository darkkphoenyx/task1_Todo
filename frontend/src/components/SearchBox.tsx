export const SearchBox = () => {
  return (
    <div className="search-box flex gap-2 w-full justify-center">
      <div className="flex items-center border border-[--primary-color] p-1 rounded-md border-gray-500">
        <input
          className="flex-grow p-1 outline-none"
          type="text"
          placeholder="Search note..."
        />
        <img src="/assets/search.svg" alt="search icon" />
      </div>
      <div className="filter ">
        <select
          className="outline-none p-2 rounded-md bg-[--primary-color] text-white"
          name="filter"
        >
          <option value="1">All</option>
          <option value="2">Completed</option>
          <option value="3">Remaining</option>
        </select>
      </div>
    </div>
  );
};
