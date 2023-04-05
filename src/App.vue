<template>
  <div class="w-screen h-screen flex sm:items-center sm:justify-center">
    <div
      class="mx-auto w-full max-w-sm h-full sm:h-fit text-[#d9d9d9] flex flex-col items-center"
    >
      <div class="border border-[#ef4444] rounded-b-2xl overflow-clip w-full">
        <header class="text-center p-2">
          <h1 class="flex flex-col">
            <span class="text-2xl">VANGUARD WEB ART.</span>
            <span class="text-sm font-semibold">Q&A Bot</span>
          </h1>
        </header>
        <main class="w-full">
          <router-view></router-view>
        </main>
      </div>
      <footer>
        <p class="text-xs text-gray-400 py-1">
          Powered by
          <a href="https://openai.com/" class="font-semibold hover:underline"
            >OpenAI</a
          >
          and
          <a
            href="https://www.pinecone.io/"
            class="font-semibold hover:underline"
            >Pinecone</a
          >
        </p>
        <p class="text-xs text-gray-400 py-1">
          2023 &copy;
          <a
            href="https://www.vanguardwebart.com/"
            class="font-semibold hover:underline"
            >Vanguard Web Art.</a
          >
          All rights reserved.
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
