import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "@/components/AboutPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import HomePage from "@/components/HomePage.vue";
import ServicesPage from "@/components/ServicesPage.vue";
import ProductPreview from "./components/ProductPreview.vue";
import Products from "./components/Products.vue";
import NotFound from "./components/NotFound.vue";

const routePath = [
  { path: "/", component: HomePage },
  { path: "/about-us", component: AboutPage },
  { path: "/services", component: ServicesPage },
  { path: "/contact-us", component: ContactPage },
  { path: "/product", component: Products },
  { path: "/product-preview/:productSlug", component: ProductPreview },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routePath,
});
