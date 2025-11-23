<script>
import { products } from "../../constants/data";

export default {
  data() {
    return {
      products,
    };
  },
};
</script>
<template>
  <div>
    <h1>Product Page</h1>
    <div class="product-wraper">
      <div class="product-card" v-for="product in products">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <h3>{{ product.price }}</h3>
        <!-- <button @click="$router.push(`/product-preview/${product.slug}`)">
          View Product
        </button> -->
        <div>
          <RouterLink
            class="product-btn btn"
            :to="'/product-preview/' + product.slug"
            >Product datails</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-wraper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: start;
}
.product-card {
  display: flex;
  width: 29%;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 30px 15px;
  background-color: #f5f5f5;
  border-radius: 10px;
  height: 100%;
}
</style>
