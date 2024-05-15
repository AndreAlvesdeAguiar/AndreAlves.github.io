<template>
  <div class="flex flex-col sm:justify-between items-center dark:bg-ternary-dark md:px-10 md:py-10">
    <BlogGridSkeleton v-if="pending" />
    <BlogGrid v-else :posts="posts" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLazyFetch } from 'your-lazy-fetch-lib'; // Importe sua biblioteca de busca preguiçosa

const posts = ref([]);
const pending = ref(true);

onMounted(async () => {
  try {
    const response = await fetch('https://dev.to/api/articles?username=dehkeep');
    const data = await response.json();
    posts.value = data;
    pending.value = false;
  } catch (error) {
    console.error('Erro ao carregar os posts:', error);
    pending.value = false;
  }
});
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
