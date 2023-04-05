<template>
  <div class="w-full">
    <form @submit.prevent="onQuerySubmit()" class="w-full flex-col flex gap-0 items-center">
      <textarea v-model="queryInput" type="text" placeholder="Ask a question about us.." class="w-full border border-y-[#ef4444] border-x-0 bg-[#1a1a1a] focus:outline-0 p-2 resize-none box-shadow-inset" rows="4" />
      <button type="submit" class="bg-[#ef4444] rounded-b-lg text-[#1a1a1a] w-fit px-6">Ask</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "QuestionBox",
  data() {
    return {
      queryInput: this.$route.query.query || "",
    };
  },
  methods: {
    onQuerySubmit() {
      this.$router
        .push({ path: "/", query: { query: this.queryInput } })
        .then(() => {
          this.$router.go(this.$router.currentRoute);
        });
    },
  },
};
</script>
<style></style>
