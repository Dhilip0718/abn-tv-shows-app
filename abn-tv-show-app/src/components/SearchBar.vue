<template>
    <div class="search-container">
        <div class="input-wrapper">
            <input v-model="searchQuery" @keypress.enter="onSearch" placeholder="Search..." />
            <button @click="onSearch">
                <!-- <IconSearch /> -->
            </button>
        </div>
        <template v-for="tvShow in tvShows" :key="tvShow.show.id">
            <ShowCard v-if="tvShow.show" :cardHeader="tvShow.show.name"
                :imageUrl="tvShow.show.image?.original" :cardDescription="tvShow.show.summary"></ShowCard>
        </template>

    </div>
</template>
  
<script>

// import IconSearch from './icons/IconSearch.vue'
import ShowCard from './ShowCard.vue'
import tvShowsService from '../services/tvShowsService'


export default {
    data() {
        return {
            searchQuery: '',
            tvShows: [],
        }
    },
    components: {
        ShowCard,
        // IconSearch
    },
    methods: {
        async onSearch() {
            const lowercaseQuery = this.searchQuery.toLowerCase()
            console.log('lowecaseQuery', lowercaseQuery)
            this.tvShows = await tvShowsService.getFilteredShows(lowercaseQuery)
            console.log('TV Shows', this.tvShows)
        }
    },
    computed: {
        filteredShows() {
            // Case-insensitive search based on the item name
            return this.$store.getters.filteredShows?.slice(0, 5)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/global.scss';

.search-container {
    width: 100%;
    background: rgb(131, 58, 180);
    background: linear-gradient(90deg,
            rgba(131, 58, 180, 1) 0%,
            rgba(253, 29, 29, 1) 50%,
            rgba(252, 176, 69, 1) 100%);
    color: $white;
    padding: 2rem;

    .input-wrapper {
        text-align: center;

        input {
            width: 50%;
            font-size: 1.5rem;
            padding: 0.5rem;
            border-radius: 8px;
            outline: none;
            border: 0;
        }

        button {
            font-size: 2rem;
            background-color: transparent;
            border: none;
            padding: 2px;
            margin-left: -2.5rem;
            bottom: -5px;
            position: relative;
        }
    }

    h2 {
        padding-top: 2rem;
    }

    .shows-container {
        display: flex;
        width: 100%;
        overflow-x: auto;
    }
}
</style>
  