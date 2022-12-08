import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import BlogView from '../views/BlogView.vue'
import NotFound from '../views/NotFound.vue'
import ContactView from '../views/ContactView.vue'
import GamingWebsite from '../views/Different Projects/GamingWebsite.vue' 
import CarRental from '../views/Different Projects/CarRental.vue'
import Personal from '../views/Different Projects/Personal.vue'

  

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Home"
    },
  },
  {
    path: '/projects',
    name: 'ProjectView',
    component: ProjectView,
    meta: {
      title: "Projects"
    },
  },
 
  {
    path: '/blog',
    name : 'BlogView',
    component: BlogView,
    meta: {
      title: "Blog"
    },
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView,
    meta: {
      title: "Contact-Me"
    },
  },
  //Below is the Catchall 404 Page
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: "NotFound"
    },
  },
 
  {
    path: '/projects/gamingwebsite',
    name: 'GamingWebsite',
    component: GamingWebsite,
    meta: {
      title: 'Gaming Website'
    },
  },

  {
    path: '/projects/car-rental-application',
    name: 'CarRental',
    component: CarRental,
    meta: {
      title: 'Car-Rental'
    },
  },

  {
    path: '/projects/personal-portifilo',
    name: 'Personal',
    component: Personal,
    meta: {
      title: 'Personal-Portifilo'
    },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
