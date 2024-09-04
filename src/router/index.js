import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AdminPanel from '../components/AdminPanel.vue';
import Divany from '../components/items/Divany.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPanel,
  },
  {
    path: '/divany',
    name: 'Divany',
    component: Divany,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;