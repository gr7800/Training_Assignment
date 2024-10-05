import React, { useState } from 'react';

const SearchForm = ({ handleSearch }) => {
    const [query, setQuery] = useState('');
    const [limit, setLimit] = useState(0);
    const [orientation, setOrientation] = useState('landscape');
    const [isRandomImage, setIsRandomImage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch({ query, limit, orientation, isRandom: isRandomImage });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-slate-950 text-white p-6 shadow-lg flex justify-between gap-5">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter search term"
                required={!isRandomImage}
            />
            <input
                type="number"
                placeholder='Enter Limit'
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                min="1"
                required
            />
            <select
                value={orientation}
                onChange={(e) => setOrientation(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
                <option value="squarish">Squarish</option>
            </select>
            <div className="flex gap-3">
                <label className="text-white text-sm font-medium" htmlFor="checkobox">Get Random Image</label>
                <input type='checkbox' checked={isRandomImage} onChange={() => setIsRandomImage(prev => !prev)} />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
            >
                {isRandomImage ? 'Get' : 'Search'}
            </button>

        </form>
    );
};

export default SearchForm;
