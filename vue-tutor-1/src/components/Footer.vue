<template>
  <div class="footer w-full">
    <div class="nav">
      <ul>
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
  name: "Footer",
};
</script>

<style scoped>

.footer {
  background: #222; 
  padding: 20px 0;
  text-align: center;
}

.footer .nav ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer .nav ul li {
  margin: 0 15px;
  color: #ddd;
  font-size: 15px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footer .nav ul li:hover {
  color: #ff9800; 
}
</style>
