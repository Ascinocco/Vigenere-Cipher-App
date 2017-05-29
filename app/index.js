import Vue from 'vue';

// set global vue object
window.Vue = Vue;

// require custom components
import CryptoMagic from './components/CrytopMagic.vue';
import EncryptMagic from './components/EncryptMagic.vue';
import DecryptMagic from './components/DecryptMagic.vue';

// register global compoenents
Vue.component('encrypt-magic', EncryptMagic);
Vue.component('decrypt-magic', DecryptMagic);

// create vue instance and bind it to crypto-magic id
// render CryptoMagic component on app load
new Vue({
    el: '#crypto-magic',
    render: h => h(CryptoMagic)
});