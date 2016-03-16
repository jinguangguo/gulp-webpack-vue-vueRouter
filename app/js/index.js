/**
 * @file
 * @author jinguangguo
 * @date 2016/3/15
 */

import '../scss/index.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';

import Test from '../widget/Test/main';
import Second from '../widget/component/Second.vue';

Vue.use(VueRouter);
let vueRouter = new VueRouter();
let App = Vue.extend({});

vueRouter.map({
    '/': {
        name: 'index',
        component: Test
    },
    'second': {
        name: 'second',
        component: Second
    }
});

vueRouter.start(App, '#app');

