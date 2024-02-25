import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com';


export default {
  // Method to fetch data from the API
  async fetchAllTvShowsData() {
    const endpoint = `${BASE_URL}/shows`;

    try {
      const showsData = await axios.get(endpoint);

      return showsData.data;
    } catch (error) {
      console.error('Error fetching data:', error);

      throw error; // Example of throwing an error
    }
  },

  async getFilteredShows(searchQuery) {
    const endpoint = `${BASE_URL}/search/shows?q=${searchQuery}`;

    try {
      const filteredShows = await axios.get(endpoint);

      return filteredShows.data;
    } catch (error) {
      console.error('Error fetching data:', error);

      throw error; // Example of throwing an error
    }
  }

};
