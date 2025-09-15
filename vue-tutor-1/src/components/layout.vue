<script>
import Counter from "@/components/Counter.vue";
import ReactivityFundamentals from "@/components/ReactivityFundamentals.vue";
import Computed from "@/components/Computed.vue";
import ConditionalRendering from "@/components/ConditionalRendering.vue";
export default {
  components: {
    Counter,
    ReactivityFundamentals,
    Computed,
    ConditionalRendering
  },
};
</script>

<template>
  <div class="flex justify-center">
    <div class="container py-5">
      <Counter />
      <ReactivityFundamentals />
      <Computed />
      <ConditionalRendering/>

    </div>
  </div>
</template>

<style lang=""></style>
