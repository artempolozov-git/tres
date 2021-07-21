import Vue from 'vue'
import Router from 'vue-router'
import Header from './layouts/Header';
import Footer from './layouts/Footer';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Home.vue')
            },
            meta: {
                title: 'Услуги ландшафтного дизайна - "Трес"',
                description: 'Полный комплекс работ по ландшафтному дизайну и благоустройству земельных участков,\n' +
                    '    устройство газонов, системы автополива, аренда техники, продажа крупномеров, обслуживание территории.',
            },
            children: [],
        },
    ]
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let meta = document.createElement('meta');
    meta.name = "description";
    meta.content = to.meta.description;
    document.getElementsByTagName('head')[0].appendChild(meta);

    next()
});
export default router;