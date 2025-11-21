import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "@/components/AboutPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import HomePage from "@/components/HomePage.vue";
import ServicesPage from "@/components/ServicesPage.vue";

const routePath = [
  { path: "/", component: HomePage },
  { path: "/about-us", component: AboutPage },
  { path: "/services", component: ServicesPage },
  { path: "/contact-us", component: ContactPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routePath,
});
