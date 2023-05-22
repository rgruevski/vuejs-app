import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import * as VueRouter from 'vue-router';

createApp(App)
    .use(VueRouter.createRouter({
        history: VueRouter.createWebHistory(process.env.BASE_URL),
        routes: [{
            path: '/cart',
            name: 'cart',
            component: () => import('./pages/ShoppingCartPage.vue')
        },
        {
            path: '/products/:productId', // URL Param for Product ID'
            name: 'product-detail',
            component: () => import('./pages/ProductDetailPage.vue')
        },
        {
            path: '/products',
            name: 'products',
            component: () => import('./pages/ProductsPage.vue')
        }]
    }))
    .mount('#app')