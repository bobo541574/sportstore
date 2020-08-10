import Vue from "vue";
import VueRouter from "vue-router";

import Store from '@/components/Store.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import Checkout from '@/components/Checkout.vue';
import OrderThanks from '@/components/OrderThanks.vue';
import Authentication from '@/components/admin/Authentication.vue';
import Admin from '@/components/admin/Admin.vue';
import ProductAdmin from '@/components/admin/ProductAdmin.vue';
import OrderAdmin from '@/components/admin/OrderAdmin.vue';

import dataStore from "../store";

Vue.use(VueRouter);


export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Store },
        { path: "/cart", component: ShoppingCart },
        { path: "/checkout", component: Checkout },
        { path: "/thanks/:id", component: OrderThanks },
        { path: "/login", component: Authentication },
        {
            path: "/admin", component: Admin,
            beforeEnter(to, from, next) {
                if (dataStore.state.auth.authenticated) {
                    next();
                } else {
                    next("/login");
                }
            },
            children: [
                { path: "products", component: ProductAdmin },
                { path: "orders", component: OrderAdmin },
                { path: "", redirect: "/admin/products" }
            ]
        },
        { path: "*", redirect: "/" }
    ]
});