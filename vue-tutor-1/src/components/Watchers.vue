<script>
export default {
  data() {
    return {
      question: "",
      loading: false,

      answer: {
        answer: "Questions usually contain a question mark.",
        forced: null,
        image: null,
      },
    };
  },

  watch: {
    question(newValue) {
      if (newValue.includes("?")) {
        this.getAnswer();
      }
    },
  },

  methods: {
    async getAnswer() {
      this.loading = true;
      this.answer = "I am thinking...";

      try {
        const response = await fetch("https://yesno.wtf/api");
        const data = await response.json();
        this.answer = data;
      } catch (error) {
        this.answer = {
          answer: "There is something worung" + error,
          forced: null,
          image: null,
        };
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<template>
  <div>
    <h1 class="mb-5 text-4xl font-bold">Watchers</h1>

    <form class="flex flex-col" @submit.prevent="getAnswer">
      <div>
        <span>Ask Yes or No question: </span>
        <input
          type="text"
          class="border"
          v-model="question"
          :disabled="loading"
        />
      </div>
    </form>

    <p class="text-red-600 mt-5">
      {{ answer.answer }}
    </p>
    <p class="text-red-600 mt-5">
      {{ answer.forced }}
    </p>
    <div v-if="answer.image && answer.answer == 'yes'" class="text-center">
      <strong>Image:</strong>
      <img :src="answer.image" alt="answer" />
    </div>
  </div>
</template>
