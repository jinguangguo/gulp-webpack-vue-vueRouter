/**
 * @file
 * @author jinguangguo
 * @date 2016/3/16
 */

import Vue from 'vue';
import tpl from './tpl.html';

export default Vue.extend({

    template: tpl,

    data() {
        return {

        };
    },

    methods: {

        toClick() {
            console.log('clicked ...');
        }

    }

});