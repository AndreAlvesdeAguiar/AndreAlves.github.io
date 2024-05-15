<template>
  <div class="flex flex-col sm:justify-between items-center dark:bg-ternary-dark md:px-10 md:py-10">
    <!-- Show skeleton loader or blog grid based on pending state -->
    <BlogGridSkeleton v-if="pending" />
    <BlogGrid v-else :posts="mergedPosts" />
  </div>
</template>

<script setup lang="ts">
import { useLazyFetch } from 'your-lazy-fetch-lib'; // Import your lazy fetch library

// Fetch posts from dev.to API
const { data: devToPosts, pending: devToPending } = await useLazyFetch(
  "https://dev.to/api/articles?username=aguiar1001&state=all"
);

// Fetch data for the specific article
const { data: specificPost, pending: specificPostPending } = await useLazyFetch(
  "https://andre-alvesde-aguiar-github-io.vercel.app/pt-BR/blog/link-com-vercel-3f46"
);

// Merge specific post with dev.to posts
const mergedPosts = specificPostPending ? devToPosts : [...devToPosts, specificPost];
const pending = devToPending || specificPostPending;
</script>

<!-- Scoped styles for this component -->
<style scoped>
/* Add styles as needed */
</style>
