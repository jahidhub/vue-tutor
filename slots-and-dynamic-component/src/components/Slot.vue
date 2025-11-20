<template lang="">
  <BaseLayout>
    <template v-slot:header>
      <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </template>
    <template v-slot:main>
      <div>
        <p>
          Page layouts look better with something in each section. Web page
          designers, content writers, and layout artists use lorem ipsum, also
          known as placeholder copy, to distinguish which areas on a page will
          hold advertisements, editorials, and filler before the final written
          content and website designs receive client approval.
        </p>
      </div>
    </template>
    <template v-slot:footer>
      <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </template>
  </BaseLayout>
</template>
<script>
import BaseLayout from "./BaseLayout.vue";

export default {
  components: {
    BaseLayout,
  },
};
</script>
<style scoped>
ul {
  display: flex;
  margin-right: 20px;
  padding: 15px;
}

li {
  list-style: none;
  padding: 15px;
}
</style>
