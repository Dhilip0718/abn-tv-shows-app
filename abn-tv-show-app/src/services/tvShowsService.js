import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com';


export default {
  tvShows:[],

  // Method to fetch data from the API
  async fetchAllTvShowsData() {
    const endpoint = `${BASE_URL}/shows`;

    try {
      const showsData = await axios.get(endpoint);

      this.tvShows = showsData.data;

      return this.tvShows;
    } catch (error) {
      console.error('Error fetching data:', error);

      throw error; // Example of throwing an error
    }
  },

  async getFilteredShows(searchQuery) {
    const endpoint = `${BASE_URL}/search/shows?q=${searchQuery}`;

    try {
      const filteredShows = await axios.get(endpoint);
      console.error('id data:', filteredShows.data);

      return filteredShows.data.show;
    } catch (error) {
      console.error('Error fetching data:', error);

      throw error; // Example of throwing an error
    }
  },

  filterTvShowById(tvShowId) {
    const filtered = this.tvShows.filter((show) => show.id == tvShowId);
    return filtered;
  }


};
