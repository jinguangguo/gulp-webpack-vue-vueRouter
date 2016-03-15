/**
 * @file
 * @author jinguangguo
 * @date 2016/3/15
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from '../widget/Test/main';

Vue.use(VueRouter);
let vueRouter = new VueRouter();
let App = Vue.extend({});

vueRouter.map({
    '/': {
        name: 'index',
        component: Test
    }
});

vueRouter.start(App, '#app');

