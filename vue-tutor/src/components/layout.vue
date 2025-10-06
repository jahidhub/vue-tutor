<script>
import UseProps from "@/components/UseProps.vue";

// import Counter from "@/components/Counter.vue";
// import ReactivityFundamentals from "@/components/ReactivityFundamentals.vue";
// import Computed from "@/components/Computed.vue";
// import ConditionalRendering from "@/components/ConditionalRendering.vue";
// import EventHandling from "@/components/EventHandling.vue";
// import FormInputBindings from "@/components/FormInputBindings.vue";
// import Watchers from "@/components/Watchers.vue";

export default {
  components: {
    // Counter,
    // ReactivityFundamentals,
    // Computed,
    // ConditionalRendering,
    // EventHandling,
    // FormInputBindings,
    // Watchers,
    UseProps,
  },
};
</script>

<template>
  <div class="flex justify-center">
    <div class="container py-5 text-center">
      <!-- <Counter />
      <ReactivityFundamentals />
      <Computed />
      <ConditionalRendering />
      <EventHandling /> -->
      <!-- <FormInputBindings /> -->
      <!-- <Watchers /> -->

      <UseProps title="It is Props" />
    </div>
  </div>
</template>

<style></style>
