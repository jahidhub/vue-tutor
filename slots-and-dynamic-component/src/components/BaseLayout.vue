<script>
export default {};
</script>

<template lang="">
  <div class="container">
    <header class="header" v-if="$slots.header">
      <slot name="header"></slot>
    </header>

    <main class="main">
      <slot></slot>
    </main>

    <div>
      <slot name="footerTop"> </slot>
    </div>

    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}
.header {
  background-color: red;
  color: azure;
  font-size: 30px;
}

.footer {
  padding: 20px 20px;
  background-color: blue;
  color: azure;
}
</style>
