import { createRouter, createWebHistory } from 'vue-router';

import SetsList from "@/pages/SetsList";
import SetCards from "@/components/sets/SetCards";
import CardsList from "@/pages/CardsList";
import UserLogin from "@/pages/UserAuth";
import NotFound from "@/pages/NotFound";
import CardFooter from "@/pages/CardFooter";
import SetFooter from "@/pages/SetsFooter";
import UserFooter from "@/pages/AuthFooter";
import CardEdit from "@/components/cards/CardEdit";
import AddCard from "@/pages/AddCard";
import LearnMode from "@/pages/LearnMode";
import CardDetails from "@/pages/CardDetails";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/sets' },
        { path: '/card', component: AddCard },
        { path: '/learn', component: LearnMode },
        {
            name: 'sets',
            path: '/sets',
            components: { default: SetsList, footer: SetFooter },
            children: [
                { name: 'set-members', path: ':setId', component: SetCards, props: true }
            ]
        },
        { path: '/cards', components: { default: CardsList, footer: CardFooter } },
        { path: '/cards/details/:id', component: CardDetails, props: true },
        { path: '/cards/details/:id/edit', component: CardEdit, props: true },
        { path: '/login', components: { default: UserLogin, footer: UserFooter} },
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