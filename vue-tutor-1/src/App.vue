<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Counter from "@/components/Counter.vue";
import ReactivityFundamentals from "./components/ReactivityFundamentals.vue";
import Computed from "./components/Computed.vue";

export default {
  components: {
    Header,
    Counter,
    ReactivityFundamentals,
    Computed,
    Footer
  },
};
</script>

<template>
  <Header />
  <Counter/>
  <ReactivityFundamentals/>
<Computed/>
  <Footer/>
</template>

<style>

</style>
