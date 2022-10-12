import { createRouter, createWebHistory } from 'vue-router';

import SetsList from "@/pages/SetsList";
import CardsList from "@/pages/CardsList";
import AddUser from "@/pages/AddUser";
import NotFound from "@/pages/NotFound";
import CardFooter from "@/pages/CardFooter";
import SetFooter from "@/pages/SetsFooter";
import CardEdit from "@/components/cards/CardEdit";
import AddCard from "@/pages/AddCard";
import LearnMode from "@/pages/LearnMode";
import CardDetails from "@/pages/CardDetails";
import SetForm from "@/components/cards/SetForm";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/sets' },
        { path: '/card', component: AddCard },
        { path: '/sets', components: { default: SetsList, footer: SetFooter } },
        { path: '/sets/new', component: SetForm },
        { path: '/sets/learn/:id', component: LearnMode, props: true },
        { path: '/cards', components: { default: CardsList, footer: CardFooter } },
        { path: '/cards/details/:id', component: CardDetails, props: true },
        { path: '/cards/details/:id/edit', component: CardEdit, props: true },
        { path: '/login', component: AddUser },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _1, savedPosition)
    {
        if (savedPosition) {
            return savedPosition
        }
        return {
            left: 0,
            top: 0
        }
    }
});

export default router;