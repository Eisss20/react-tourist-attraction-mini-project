import React from 'react';

function SearchInput({ input, setInput }) {
  return (
    <div className="mx-auto max-w-7xl">
      <label className="block text-gray-700 text-sm text-left">ค้นหาที่เที่ยว</label>
      <input
        className="w-full rounded-lg border-b-2 border-gray-300 px-4 py-3 text-md text-center shadow-sm transition-colors placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="หาที่เที่ยวแล้วไปกัน..."
      />
    </div>
  );
}

export default SearchInput;