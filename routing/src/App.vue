<script>
export default {};
</script>
<template>
  <nav>
    <div class="container">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about-us">About Us</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/contact-us">Contact Us</RouterLink>
      <RouterLink to="/product">Product</RouterLink>
      <RouterLink to="/product-preview">Product View</RouterLink>
    </div>
  </nav>

  <main>
    <div class="container">
      <p>Current page is : {{ $route.fullPath }}</p>
      <RouterView />
    </div>
  </main>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  outline: 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}

nav {
  padding: 15px;
  background-color: teal;
  color: aliceblue;
}

nav a {
  color: #fff;
  padding: 0 15px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: navajowhite;
}

a {
  text-decoration: none;
}

.btn {
  padding: 10px 15px;
  color: #fff;
  font-size: 17px;
  background-color: #000;
  font-weight: 700;
  text-align: center;
  border: 0;
  border-radius: 7px;
}
h2 {
  margin: 0;
}
</style>
