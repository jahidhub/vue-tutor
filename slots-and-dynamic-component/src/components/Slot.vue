<script>
import BaseLayout from "./BaseLayout.vue";

export default {
  components: {
    BaseLayout,
    
  },

  data() {
    return {
      footerTop: "footerTop",
    };
  },
};
</script>
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

    <div>
      <p>
        Page layouts look better with something in each section. Web page
        designers, content writers, and layout artists use lorem ipsum, also
        known as placeholder copy, to distinguish which areas on a page will
        hold advertisements, editorials, and filler before the final written
        content and website designs receive client approval.
      </p>
    </div>

    <template v-slot:[footerTop]>
      <h1>
        Page layouts look better with something in each section. Web page
        designers, content writers, and layout a
      </h1>
    </template>

    <template #footer>
      <div>copiright @2025 made with love.</div>
    </template>

    <button @click="footerTop = 'footer'">click here</button>
  </BaseLayout>
</template>

<style scoped>
ul {
  display: flex;
}

li {
  list-style: none;
  padding: 15px;
  margin-right: 20px;
}
</style>
