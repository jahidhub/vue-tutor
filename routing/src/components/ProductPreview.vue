<script>
import { products } from "../../constants/data";

export default {
  data() {
    return {
      products,
    };
  },

  mounted() {
    const selectedProduct = this.products.find(
      (p) => p.slug === this.$route.params.productSlug
    );

    // console.log("Found product:", product);

    this.products = selectedProduct;
  },
};
</script>

<template>
  <div>
    <div class="container">
      <h1>{{ products.name }}</h1>
      <h5>{{ products.price }}</h5>
      <p>{{ products.description }}</p>
    </div>
  </div>
</template>

<style></style>
