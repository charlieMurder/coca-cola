import Vue from 'vue'
import './scss/main.scss'
import simpleParallax from 'simple-parallax-js';
import App from './App.vue'

require('checkboxes');


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

document.getElementById('dedcoca').setAttribute('draggable', false);
document.getElementById('stars').setAttribute('draggable', false);

var img_snowflake = document.getElementsByClassName('snowflake_wrapper');
new simpleParallax(img_snowflake, {
  orientation: 'down',
  scale: 2,
  overflow: true,
  maxTransition: 90
});