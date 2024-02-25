<template v-if="tvShows">
    <div class="container">
        <div v-for="genere in uniqueGeneres" :key="genere" class="genre-container">
            <h2>{{ genere }}</h2>
            <div class="tv-shows">
                <template v-for="tvShow in tvShows" :key="tvShow.id">
                    <ShowCard v-if="isGenereMatching(tvShow.genres, genere)" :cardHeader="tvShow.name"
                        :imageUrl="tvShow.image.medium" :cardDescription="tvShow.summary"></ShowCard>
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
                    console.log(this.tvShows)
                    this.uniqueGeneres = [...new Set(this.tvShows.map(show => show.genres).flat())];
                    console.log(this.uniqueGeneres, 'generesList')
                }
            } catch (error) {
                // Handle errors, e.g., display an error message to the user
                console.error('Error fetching data:', error);
            }
        },

        isGenereMatching(tvShowGeneres, currentGenere) {
            console.log('IsGenere Matching', tvShowGeneres, currentGenere, tvShowGeneres.includes(currentGenere))
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
        width: 100vw;
        height: 400px;
        overflow-x: auto;
        margin: 2rem;

        .tv-shows {
            display: flex;
            width: 100%;
            justify-content: flex-start;
        }
    }

}
</style>
  