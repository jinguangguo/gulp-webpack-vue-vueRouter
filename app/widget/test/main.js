/**
 * @file
 * @author jinguangguo
 * @date 2016/3/15
 */

require('./style.scss');

let Vue = require('vue');
let tpl = require('./tpl.tpl');

console.log(tpl);

module.exports = Vue.extend({

    template: tpl,

    data() {
        return {
            name: 'king'
        }
    },

    ready() {

    },

    methods: {

    }

});

