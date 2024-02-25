<template>
  <div class="card-container">
    <header class="card-header">
      <h3>{{ cardHeader }}</h3>
    </header>
    <img :src="imageUrl" alt="" class="card-image">

    <p class="card-description" v-html="limitText(cardDescription)"></p>
  </div>
</template>

<script>
export default {
  props: {
    cardHeader: String,
    imageUrl: String,
    cardDescription: String,
  },
  methods: {
    limitText(summary) {
      return summary?.length > 100 ? summary.substr(0, 190) + ' ...' : summary;
    }
  }
}
</script>

<style>
.card-container {
  /* Add general card styles */
  border: 1px solid #ddd;
  padding: 15px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  /* Add styles for width, box-shadow, etc. */
  height: 400px;
  min-width: 300px;
  align-items: flex-start;
}

.card-header {
  /* Add styles for header */

}

.card-image {
  /* Add styles for image */
  /* Example: width, height, object-fit, etc. */
  width: 100%;
  height: 70%;
  object-fit: contain;
}

p {
  margin-top: 1rem;
  font-size: 12px;
  /* Prevent line breaks */
  overflow: hidden;
  padding: 8px;

}
</style>