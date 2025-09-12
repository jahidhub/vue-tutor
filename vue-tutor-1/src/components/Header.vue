<template>
  <div class="w-full">
    <div class="nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.nav {
  background: #333;
  padding: 15px 0;
}

.nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav ul li {
  margin: 0 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav ul li:hover {
  color: #ff9800;
}
</style>
