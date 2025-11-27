<script>
import { products } from "../../constants/data"; // ✅ imported

export default {
  data() {
    return {
      products, // ✅ now this is the array
      product: null, // ✅ use separate variable for single item
    };
  },

  mounted() {
    const selectedProduct = this.products.find(
      (p) => p.slug === this.$route.params.productSlug
    );

    if (!selectedProduct) {
      this.$router.push({ name: "NotFound" }); // ✅ must be string route name
      return;
    }

    this.product = selectedProduct; // ✅ store in product
  },
};
</script>

<template>
  <div>
    <div v-if="product">
      <div class="single-product-details">
        <div class="product-image">
          <img src="../assets/images/images01.png" alt="product-img" />
        </div>
        <div class="product-view">
          <h1>{{ product.name }}</h1>
          <h3>{{ product.price }}</h3>
          <p>{{ product.description }}</p>
          <div class="mt-5">
            <router-link to="/product" class="btn">Product</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.single-product-details {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
