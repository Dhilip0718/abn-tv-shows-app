import axios from 'axios';

// const baseURL = 'https://www.tvmaze.com';

export default {
  // Method to fetch data from the API
  async fetchTvShowsData() {
    try {
      const showsData = await axios.get('https://api.tvmaze.com/shows');
      return showsData.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      
      throw error; // Example of throwing an error
    }
  },
};
