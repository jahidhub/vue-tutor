<template>
  <div class="center">
    <div class="flex justify-center py-5">
      <div class="">
        <button @click="decrement" 
          class="uppercase bg-blue-400 text-xl px-3 py-2 text-white font-bold hover:bg-blue-700">
          decrement
        </button>
      </div>
      <h2 :class="countStyle" class="px-20 text-4xl font-bold">
        {{ count }}
      </h2>

      <button :disabled="isButtonDisable" @click="increment" class="bg-teal-400 text-white uppercase hover:bg-teal-600 font-bold text-xl px-3 py-2">
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
      countStyle: "normal",
      isButtonDisable:false
    };
  },

  methods: {
    increment() {
      this.count++;

      
      if ((this.count < 20)) {
        this.isButtonDisable= false
        
      }

      if (this.count > 10) {
        this.countStyle = "green";
      }
      if ((this.count > 20)) {
        this.isButtonDisable= true
        
      }
    },
    decrement() {

      this.count--;

      if (this.count > 5) {
        this.countStyle = "success";
      }

      if ((this.count < 5)) {
        this.countStyle = "danger";
        
      }

 
      
    },
  },

  mounted() {
    console.log(`The initial count is ${this.count}.`);
  },
};
</script>

<style scoped>
.danger {
  color: red;
}

.success {
  color: greenyellow;
}

.green {
  color: green;
}

.normal {
  color: black;
}
</style>
