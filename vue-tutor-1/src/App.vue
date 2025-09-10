<script>
import Header from "@/components/Header.vue";
import Footer from "./components/Footer.vue";
import Middle from "./components/Middle.vue";

export default {
  components: {
    Header,
    Middle,
    Footer
  },
};
</script>

<template>
  <Header />
  <Middle/>
  <Footer/>
</template>

<style>
* {
  margin: 0;
}
</style>
