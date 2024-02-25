<template v-if="tvShows">
    <div class="container">
        <div v-for="genere in uniqueGeneres" :key="genere" class="genre-container">
            <h2>{{ genere }}</h2>
            <div class="tv-shows">
                <template v-for="tvShow in tvShows" :key="tvShow.id">
                    <router-link :to="'/show/'+tvShow.id">
                        <ShowCard v-if="isGenereMatching(tvShow.genres, genere)" :cardHeader="tvShow.name"
                            :imageUrl="tvShow.image.medium" :cardDescription="tvShow.summary" :id="tvShow.id"></ShowCard>
                    </router-link>
                </template>
            </div>
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
                    this.uniqueGeneres = [...new Set(this.tvShows.map(show => show.genres).flat())];
                }
            } catch (error) {
                // Handle errors, e.g., display an error message to the user
                console.error('Error fetching data:', error);
            }
        },

        isGenereMatching(tvShowGeneres, currentGenere) {
            return tvShowGeneres.includes(currentGenere);
        }
    },
};
</script>

<style>
.container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    .genre-container {
        width: 100%;
        height: 42vh;
        margin: 2rem;



        .tv-shows {
            display: flex;
            width: 100%;
            justify-content: flex-start;
            overflow-x: auto;
        }
    }

}
</style>
  