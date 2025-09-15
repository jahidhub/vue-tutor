<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Layout from "@/components/layout.vue";

export default {
  components: {
    Header,
    Layout,
    Footer,
  },
};
</script>

<template>
  <Header />
  <Layout />
  <Footer />
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
}
</style>
