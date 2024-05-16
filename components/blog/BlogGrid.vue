<script setup>
const route = useRoute();

const { locale } = useI18n();
if (route.query.to !== undefined) {
  const toPost = route.query.to.split(",");
  const index = locale.value === "pt-BR" ? 0 : 1;
  await navigateTo(`/blog/${toPost[index]}`);
}

const props = defineProps({
  posts: {
    type: Array,
  },
  postPerPage: {
    default: 5,
    type: Number,
  },
});

const currentPage = ref(1);


</script>

<template>

    <TransitionGroup name="post">
      <BlogPostListItem
        v-for="(post, index) in filteredBlogPosts"
        :key="index"
        :featured="filteredBlogPosts[0].id === post.id"
        :post="post"
      />
      <SharedPagination
        v-show="totalPages > 1"
        :current-page="currentPage"
        :total-pages="totalPages"
        @next-page="currentPage++"
        @prev-page="currentPage--"
      />
  </div>
  <div
    v-else
    class="h-screen flex flex-col items-center container justify-center center text-primary-dark dark:text-primary-light"
  >
    <p>{{ $t("blog.withoutPosts") }}</p>
  </div>
</template>
<style scoped>
.post-move,
.post-enter-active,
.post-leave-active {
  transition: all 0.5s ease;
}
.post-enter-from,
.post-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
