import { useState } from "react";

function AutoComplete({ images }) {
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);

    if (userInput.trim()) {
      const filteredImages = images.filter((image) =>
        image.title.toLowerCase().includes(userInput.toLowerCase())
      );
      setSuggestions(filteredImages);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 px-4">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search images..."
          className="w-full p-3 md:p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition text-black"
        />
        {suggestions.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-2 z-10 max-h-60 overflow-y-auto">
            {suggestions.map((image) => (
              <li
                key={image.title}
                className="p-3 md:p-4 cursor-pointer hover:bg-secondary hover:text-white transition-colors text-black"
              >
                {image.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AutoComplete;
