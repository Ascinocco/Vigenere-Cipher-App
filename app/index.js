import Vue from 'vue';
// const { encrypt } = require('vigenere-cipher');

window.Vue = Vue;
// window.encrypt;

import CryptoMagic from './components/CrytopMagic.vue';

new Vue({
    el: '#crypto-magic',
    render: h => h(CryptoMagic)
});