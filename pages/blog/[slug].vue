<template>
  <div
    class="flex flex-col sm:justify-between items-center dark:bg-ternary-dark md:px-10 md:py-10"
  >
    <BlogGridSkeleton v-if="pending" />
    <BlogGrid v-else :posts="posts" />
  </div>
</template>

<script setup lang="ts">
import { useLazyFetch } from 'your-lazy-fetch-lib'; // Importe sua biblioteca de busca preguiçosa

// Função para obter os artigos do Dev.to
const getArticles = async (username) => {
  const articles = await fetch(`https://dev.to/api/articles?username=${username}`).then((res) => res.json());
  return articles;
};

// Use a função para obter os artigos e manipule a lógica de carregamento
const username = 'dehkeep'; // Defina seu nome de usuário do Dev.to
const { data: posts, pending } = await useLazyFetch(() => getArticles(username));
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
