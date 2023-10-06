import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Navbar from './components/navbar.vue';
import ContactForm from './components/contactForm.vue';
import HomePage from './components/homePage.vue';
import ProjectsPage from './components/projectsPage.vue';
import AboutPage from './components/aboutPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectsPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactForm }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp({
    components: {
        Navbar,
        ContactForm
    }
});

app.use(router);
app.mount('#app');
