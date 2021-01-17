import React from 'react';

const Filter = (props) => {
  const { type } = props;
  const { options } = props;
  const { clickHandler } = props;
  const { allGenres } = props;
  if (type === 'state') {
    return (
      <div className="filter-dropdown">
        <label for='state'>Choose a state</label>
          <select name="states" onChange={(e) => clickHandler(e, 'state')}>
            {
              options.map(state => {
                return (
                  <option value={state}> {state}</option>
                )
              })
            }
            </select>
      </div>
    )
  }
  if (type === 'genre') {
    return (
      <div className="filter-dropdown">
        <label for='category'>Choose a category</label>
          <select name="categories" onChange={(e) => clickHandler(e, 'categories')}>
          {
            allGenres.map(genre => {
              return (
                <option value={genre}> {genre}</option>
              )
            })
          }
          </select>

      </div>
    )
  }
}

// This will be updated to be dynamic with states and genre, just setting placeholders now.

export default Filter
