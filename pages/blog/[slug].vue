<template>
  <div class="grid p-5 w-full sm:m-auto sm:max-w-3xl">
    <div class="min-h-screen">
      <div class="flex mb-4">
        <h1 class="dark:text-gray-300 text-3xl font-bold">Github Repo</h1>
      </div>

      <!-- Renderizando os detalhes do artigo -->
      <div v-if="article">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p>Publicado em: {{ article.readable_publish_date }}</p>
        <img :src="article.cover_image" :alt="article.title" />
        <div v-html="article.body_html"></div>
      </div>

      <!-- Mostrando um indicador de carregamento enquanto os detalhes do artigo estão sendo carregados -->
      <div v-else>
        <p>Carregando...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from 'vue-router';

// Fazendo uma solicitação HTTP para obter os detalhes do artigo do dev.to
const { data: article, error, pending } = await useFetch(
  "https://dev.to/api/articles/aguiar1001/link-com-vercel-3f46"
);
</script>

<style>
/* Estilos conforme necessário */
</style>
