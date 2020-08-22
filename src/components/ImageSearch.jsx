import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="search-border flex items-center bg-grey-100 py-2 px-2">
        <input onChange={e => setText(e.target.value)} className="search-text appearance-none bg-transparent border-none w-full text-purple-500 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
        <button className="search-btn flex-shrink-0 bg-purple-500 hover:bg-purple-700 text-sm text-white py-1 px-2 rounded" type="submit">
      Search
      </button>
      </div>
      </form>
		</div>
  )
}

export default ImageSearch;
