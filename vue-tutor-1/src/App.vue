<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Watchers from "@/components/Watchers.vue";
// import Computed from "@/components/Computed.vue";

export default {
  components: {
    Header,
    // Computed,
    Watchers,
    Footer,
  },
};
</script>

<template>
  <Header />
  <!-- <Computed /> -->
   <Watchers/>
  <Footer />
</template>

<style></style>
