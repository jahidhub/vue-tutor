<template>
<div class="w-full bg-gray-900">
  <header class="flex justify-center">
    <nav class="container flex items-center justify-between px-6 py-4">
      <!-- Logo Left -->
      <a href="#" class="text-white text-2xl font-bold">Sohan</a>

      <!-- Menu Right -->
      <div class="hidden lg:flex gap-x-8">
        <a href="#" class="text-sm font-semibold text-white hover:text-teal-400">Home</a>
        <a href="#" class="text-sm font-semibold text-white hover:text-teal-400">About</a>
        <a href="#" class="text-sm font-semibold text-white hover:text-teal-400">Contact Us</a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex lg:hidden">
        <button class="p-2 text-gray-400 hover:bg-gray-800 rounded-md">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
          </svg>
        </button>
      </div>
    </nav>
  </header>
</div>



</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
