import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueGtag from "vue-gtag";

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: {id: "G-HRB83DX73M"}
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
