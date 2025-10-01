<template>
  <div>
    <h3>Lorem ipsum dolor sit amet.</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, veritatis.
    </p>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
  </div>
  <LifecycleComp v-if="activeComp"> </LifecycleComp>
</template>

<script>
import LifecycleComp from "./LifecycleComp.vue";
export default {
  name: "Lifecycle",
  components: {
    LifecycleComp,
  },
  data() {
    return {
      activeComp: false,
    };
  },
};
</script>

<style scoped></style>
