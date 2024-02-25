<template v-if="tvShows">
    <div v-for="genere in uniqueGeneres" :key="genere" class="container">
        <div class="card-slot">
            <ShowCard v-for="tvShow in tvShows" :key="tvShow.id" :cardHeader="tvShow.name" :imageUrl="tvShow.image.medium"
                :cardDescription="tvShow.summary"></ShowCard>
        </div>
    </div>
</template>
  
<script>
import tvShowsService from '../services/tvShowsService'
import ShowCard from './ShowCard.vue';

export default {
    components: {
        ShowCard,
    },
    data() {
        return {
            tvShows: null,
            uniqueGeneres: null,
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                this.tvShows = await tvShowsService.fetchAllTvShowsData();
                if (this.tvShows.length !== 0) {
                    console.log(this.tvShows)
                    this.uniqueGeneres = [...new Set(this.tvShows.map(show => show.genres).flat())];
                    console.log(this.uniqueGeneres, 'generesList')
                }
            } catch (error) {
                // Handle errors, e.g., display an error message to the user
                console.error('Error fetching data:', error);
            }
        },
    },
};
</script>

<style>
.container {
    display: flex;

    .card-slot {
        display: flex;
        overflow-x: auto;
        width: 100%;
        justify-content: flex-start;
    }
}
</style>
  