<template>
  <div
    class="flex flex-col sm:justify-between items-center dark:bg-ternary-dark md:px-10 md:py-10"
  >
    <BlogGridSkeleton v-if="pending" />
    <BlogGrid v-else :posts="posts" />
  </div>
</template>
<script setup lang="ts">
const { data: posts, pending } = await useFetch(
  "https://dev.to/lfxa/aprendizado-continuo-e-engenharia-de-software-27p6",
);
</script>
<style scoped></style>
