
<template>
  <div
    class="flex flex-col sm:justify-between items-center dark:bg-ternary-dark md:px-10 md:py-10"
  >
    <BlogGridSkeleton v-if="pending" />
    <BlogGrid v-else :posts="posts" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const posts = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await fetch('https://dev.to/api/articles?username=dehkeep');
    const data = await response.json();
    posts.value = data;
    loading.value = false;
  } catch (error) {
    console.error('Erro ao carregar os posts:', error);
    loading.value = false;
  }
});
</script>
<style scoped></style>