import React from 'react';

const SearchBar = (props) => {
  //add debugger and check what props holds (happens on load)
  // debugger
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
              {/* give it a name so only one can be selected at a time*/}
        <input name="stock" type="radio" value="Alphabetically" checked={null} onChange={props.sortAlphabetically} />
        Alphabetically
      </label>
      <label>
        <input name="stock" type="radio" value="Price" checked={null} onChange={props.sortByPrice} />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        {/* we call the function and feed it the event targets value */}
        <select onChange={e => props.sortByType(e.target.value)}> 
          <option value="All">All stocks</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
