



<template>
  <div class="py-5">
    <h1 class="text-center" @click="increment">{{ count }}</h1>
    <h1 class="text-center" @click="deeplyfunc">{{ obj.nasted.count }}</h1>
    <h2 class="text-center">{{ obj.arr }}</h2>
  </div>
</template>

<script>
import { nextTick } from 'vue'
export default {
  data() {
    return {
      count: 0,

      obj: {
        nasted: { count: 0 },
        arr: ["foo", "bar"],
      },

    };
  },

  methods: {
   async increment() {
      this.count++;

      await nextTick()
    },

    deeplyfunc() {

        this.obj.nasted.count++
        this.obj.arr.push('baz')

    },



  },

//   mounted() {
//     this.increment();
//   },
};
</script>

<style scoped></style>
