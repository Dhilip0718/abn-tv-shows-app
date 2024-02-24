<template>
    <div v-if="data" >
      <h1>{{ data }}</h1>
      <p>{{ data }}</p>
    </div>
    <p v-else>Loading data...</p>
  </template>
  
  <script>
  import tvShowsService from '../services/tvShowsService'
  
  export default {
    data() {
      return {
        data: null,
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          this.data = await tvShowsService.fetchTvShowsData();
        } catch (error) {
          // Handle errors, e.g., display an error message to the user
          console.error('Error fetching data:', error);
        }
      },
    },
  };
  </script>
  