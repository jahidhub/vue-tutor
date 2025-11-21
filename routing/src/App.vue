<script>
export default {};
</script>
<template>
  <div>
    <h1>This is Vue Routing</h1>
    <p>Current page is : {{ $route.fullPath }}</p>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about-us">About Us</RouterLink>
    <RouterLink to="/services">Services</RouterLink>
    <RouterLink to="/contact-us">Contact Us</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
<style></style>
