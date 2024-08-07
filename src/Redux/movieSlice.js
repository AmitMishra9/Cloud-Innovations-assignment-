import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define async thunk
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/movies');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    isLoading: false,
    isError: false,
    movies: [],
    filteredMovies: [], // Display filtered data here
    filters: {
      ratings: [],
      sortOrder: null,
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
      // Apply filters whenever filters are updated
      state.filteredMovies = applyFilters(state.movies, state.filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
        state.filteredMovies = applyFilters(action.payload, state.filters); // Apply filters initially
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

const applyFilters = (movies, filters) => {
  const { ratings, sortOrder } = filters;
  let filtered = movies;

  if (ratings.length > 0) {
    filtered = filtered.filter(movie => ratings.includes(movie.rating));
  }

  if (sortOrder) {
    filtered.sort((a, b) => {
      const yearA = parseInt(a.Year, 10);
      const yearB = parseInt(b.Year, 10);
      return sortOrder === 'asc' ? yearA - yearB : yearB - yearA;
    });
  }

  return filtered;
};


export const { setFilters } = movieSlice.actions;
export default movieSlice.reducer;
