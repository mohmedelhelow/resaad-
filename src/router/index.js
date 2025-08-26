import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Services from '../views/OurServices.vue'
import ContactUs from '../views/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',        name: 'home',     component: Home,      meta: { titleKey: 'title.home' } },
    { path: '/about',   name: 'about',    component: AboutUs,   meta: { title: 'About Us' } },
    { path: '/services',name: 'services', component: Services,  meta: { title: 'Services' } },
    { path: '/contact', name: 'contact',  component: ContactUs, meta: { title: 'Contact Us' } }
  ]
})


export default router
