<template>
  <div class="mt-4">
    <div
      class="border border-t-[#ef4444] border-x-0 border-b-0 p-2 h-44 overflow-y-auto box-shadow-inset"
    >
      <p id="responseDisplay" :class="{ hidden: !response }"></p>
      <p v-if="fetching" class="animate-pulse text-red-300 font-semibold">
        Preparing an answer for you..
      </p>
      <p v-else-if="errorOccurred" class="text-red-300 font-semibold">
        Error occured! Don't forget to check your internet connection, then try
        again.
      </p>
      <p v-else-if="!response">Response will be displayed here.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnswerBox",
  data() {
    return {
      query: this.$route.query.query || "",
      response: "",
      errorOccurred: false,
      fetching: false,
    };
  },
  methods: {
    async fetchSimilarIDs(query) {
      let similarIDs = await this.$axios.get(
        `${process.env.VUE_APP_STRAPI_URL}/api/corpuses/query-embedding/${query}`
      );

      return similarIDs.data;
    },
    async fetchItemsByIDs(ids) {
      let items = [];
      ids.forEach((id) => {
        items.push(
          this.$axios.get(
            `${process.env.VUE_APP_STRAPI_URL}/api/corpuses/${id}`
          )
        );
      });
      items = (await Promise.all(items)).map((item) => item.data.data);
      return items;
    },
    async getAnswerResponse(query, items) {
      let response = await this.$axios.post(
        `${process.env.VUE_APP_STRAPI_URL}/api/corpuses/get-chat-completion`,
        {
          query: query,
          items: items,
        }
      );
      return response.data;
    },
    typewriterEffect(target) {
      let i = 0;
      let txt = this.response;
      function typeWriter(el) {
        if (i < txt.length) {
          el.innerHTML += txt.charAt(i);
          i++;
          setTimeout(() => {
            typeWriter(el);
          }, 50);
        }
      }
      typeWriter(target);
    },
  },
  async mounted() {
    if (this.query) {
      this.fetching = true;
      try {
        let ids = await this.fetchSimilarIDs(this.query);
        let items = await this.fetchItemsByIDs(ids);
        this.response = await this.getAnswerResponse(this.query, items);
        this.typewriterEffect(document.getElementById("responseDisplay"));
        this.errorOccurred = false;
      } catch (err) {
        console.log(err);
        this.errorOccurred = true;
      }
      this.fetching = false;
    }
  },
};
</script>
<style>
.animate-pulse {
  animation: pulse 800ms cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
}
</style>
