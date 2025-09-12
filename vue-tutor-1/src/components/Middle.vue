<template>
  <div class="center">
    <div class="flex justify-center py-5">
      <div class="">
        <button @click="decrement"
          class="uppercase bg-blue-400 text-xl px-3 py-2 text-white font-bold hover:bg-blue-700"
        >
          decrement
        </button>
      </div>
      <h2 class="px-20 text-red-800 text-4xl font-medium">{{ count }}</h2>
      <button @click="increment"
        class="bg-teal-400 text-white uppercase hover:bg-teal-600 font-bold text-xl px-3 py-2"
      >
        Increment
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },

  methods:{
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    },



  },

mounted() {
    console.log(`The initial count is ${this.count}.`)
  }

};
</script>

<style scoped></style>
