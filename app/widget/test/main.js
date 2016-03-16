/**
 * @file
 * @author jinguangguo
 * @date 2016/3/15
 */

import './style.scss';

import Vue from 'vue';
import tpl from './tpl.html';

import first from '../component/First/main';

export default Vue.extend({

    template: tpl,

    components: {
        'my-first-component': first
    },

    data() {
        return {
            name: 'king',
            isShow: true
        }
    },

    /**
     * 可以充当对某个数据的格式化处理之后的内容
     */
    computed: {
        nameUpper() {
            return this.name.toUpperCase();
        }
    },

    ready() {

    },

    methods: {

    }

});

