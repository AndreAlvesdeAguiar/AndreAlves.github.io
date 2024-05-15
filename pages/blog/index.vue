<template>
  <div class="flex flex-col sm:justify-between items-center dark:bg-ternary-dark md:px-10 md:py-10">
    <!-- Show skeleton loader or blog grid based on pending state -->
    <BlogGridSkeleton v-if="pending" />
    <BlogGrid v-else :posts="posts" />
  </div>
</template>

<script setup lang="ts">
import { useLazyFetch } from 'your-lazy-fetch-lib'; // Import your lazy fetch library

// Define variables using the setup function
const { data: posts, pending, error } = useLazyFetch(
  "https://dev.to/api/articles?username=aguiar1001&state=all"
);
</script>

<!-- Scoped styles for this component -->
<style scoped>
/* Add styles as needed */
</style>
