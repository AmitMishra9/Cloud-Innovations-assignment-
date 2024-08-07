import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../Redux/movieSlice';
import '../Style/Sidebar.css';

const SideBar = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.movies);

  const handleRatingChange = (rating) => {
    const newRatings = filters.ratings.includes(rating)
      ? filters.ratings.filter(r => r !== rating) // Remove rating if it's already included
      : [...filters.ratings, rating]; // Add new rating

    dispatch(setFilters({ ...filters, ratings: newRatings }));
  };

  const handleSortChange = (sortOrder) => {
    dispatch(setFilters({ ...filters, sortOrder }));
  };

  return (
    <div className="sidebar">
      <h3>Filter by Rating:</h3>
      <div className="rating-filter">
        {[1, 2, 3, 4, 5].map(rating => (
          <label key={rating}>
            <input
              type="checkbox"
              checked={filters.ratings.includes(rating)}
              onChange={() => handleRatingChange(rating)}
            />
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
            {[...Array(5 - rating)].map((_, i) => (
              <span key={i} className="star empty">☆</span>
            ))}
          </label>
        ))}
      </div>

      <h3>Sort by Year:</h3>
      <div className="sort-options">
        <label>
          <input
            type="radio"
            checked={filters.sortOrder === 'asc'}
            onChange={() => handleSortChange('asc')}
          />
          Ascending
        </label>
        <label>
          <input
            type="radio"
            checked={filters.sortOrder === 'desc'}
            onChange={() => handleSortChange('desc')}
          />
          Descending
        </label>
      </div>
    </div>
  );
};

export default SideBar;
