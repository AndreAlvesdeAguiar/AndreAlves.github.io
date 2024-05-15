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

const filteredBlogPosts = computed(() => {
  return props.posts
    ?.filter((post) => {
      const postLang = post.canonical_url.split("/")[3];
      const isSameLanguage = postLang === locale.value;

    .slice(
      props.postPerPage * (currentPage.value - 1),
      currentPage.value * props.postPerPage,
    );
});

const totalPages = computed(() =>
  Math.ceil(filteredBlogPosts.value.length / props.postPerPage),
);

</script>

<template>
  <div
    v-if="filteredBlogPosts?.length"
    class="grid grid-cols-6 container lg:h-full xl:h-screen md:grid-flow-col grid-flow-row justify-items-center mb-3 p-6 md:px-0"
  >
    <TransitionGroup name="post">
      <BlogPostListItem
        v-for="(post, index) in filteredBlogPosts"
        :key="index"
        :featured="filteredBlogPosts[0].id === post.id"
        :post="post"
      />
    </TransitionGroup>

    <SharedPagination
      v-show="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      @next-page="currentPage++"
      @prev-page="currentPage--"
    /> -->
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
