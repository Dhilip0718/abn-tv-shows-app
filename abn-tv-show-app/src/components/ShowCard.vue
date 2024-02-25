<template>
  <div class="card-container">
    <header class="card-header">
      <h3>{{ cardHeader }}</h3>
    </header>
    <img :src="imageUrl" alt="" class="card-image">
    <p class="card-description">{{ cardDescription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cardHeader: String,
    imageUrl: String,
    cardDescription: String,
  }
}
</script>

<style>
.card-container {
  /* Add general card styles */
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  /* Add styles for width, box-shadow, etc. */
  height: 400px;
  width: 300px;
}

.card-header {
  /* Add styles for header */

}

.card-image {
  /* Add styles for image */
  /* Example: width, height, object-fit, etc. */
  width: 100%;
  height: 80%;
  object-fit: cover;
}

.card-description {
  /* Add styles for description */
  /* Example: font-size, line-height, etc. */
  font-size: 12px;
  white-space: nowrap;
  /* Prevent line breaks */
  overflow: hidden;

}
</style>