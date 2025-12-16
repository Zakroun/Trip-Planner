import { createSlice, configureStore } from "@reduxjs/toolkit";

export const tripSlice = createSlice({
  name: "tripplanner",
  initialState: {
    trips: [],
    favorites: [],
    user: null,
    token: null,
    isAuthenticated: false,
    activsection: "home",
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    updateactivsection: (state, action) => {
      state.activsection = action.payload;
    },
    addTrip: (state, action) => {
      state.trips.push(action.payload);
      state.success = "Trip added successfully";
    },
    removeTrip: (state, action) => {
      state.trips = state.trips.filter((trip) => trip.id !== action.payload);
      state.success = "Trip removed successfully";
    },
    updateTrip: (state, action) => {
      const index = state.trips.findIndex(
        (trip) => trip.id === action.payload.id
      );
      if (index !== -1) state.trips[index] = action.payload;
      state.success = "Trip updated successfully";
    },
    addFavorite: (state, action) => {
      if (!state.favorites.find((fav) => fav.id === action.payload.id)) {
        state.favorites.push(action.payload);
        state.success = "Added to favorites";
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
      state.success = "Removed from favorites";
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.success = "Login successful";
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.success = "Logged out successfully";
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.success = null;
    },
    clearStatus: (state) => {
      state.error = null;
      state.success = null;
    },
  },
});
export const {
  updateactivsection,
  addTrip,
  removeTrip,
  updateTrip,
  addFavorite,
  removeFavorite,
  loginSuccess,
  logout,
  setLoading,
  setError,
  clearStatus,
} = tripSlice.actions;
