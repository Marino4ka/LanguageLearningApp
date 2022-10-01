import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import SetsList from "@/components/sets/SetsList";
import SetCards from "@/components/sets/SetCards";
import CardsList from "@/components/cards/CardsList";
import UserLogin from "@/components/registration/UserLogin"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/sets', component: SetsList },
        { path: '/sets/:setId', component: SetCards },
        { path: '/cards', component: CardsList },
        { path: '/login', component: UserLogin },
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
