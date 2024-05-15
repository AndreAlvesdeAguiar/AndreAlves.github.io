<template>
  <div
    class="flex flex-col sm:justify-between items-center dark:bg-ternary-dark md:px-10 md:py-10"
  >
    <BlogGridSkeleton v-if="pending" />
    <BlogGrid v-else :posts="posts" />
  </div>
</template>

<script setup lang="ts">
// Importe a função useLazyFetch da sua biblioteca
import { useLazyFetch } from 'lazy-fetch-lib';

// Defina a função que busca os artigos
const fetchArticles = async () => {
  try {
    const response = await fetch('https://dev.to/api/articles?username=dehkeep&state=all');
    return await response.json();
  } catch (error) {
    throw new Error('Erro ao carregar os artigos: ' + error.message);
  }
};

// Use o hook useLazyFetch para buscar os artigos
const { data: posts, pending } = useLazyFetch(fetchArticles);
</script>
