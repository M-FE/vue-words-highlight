import Vue from "vue";
import App from "./App";

import { highlight } from '../src/main';
import MHightlight from '../src/main';
Vue.use(highlight, {
  className: 'red',
  style: 'color: #0f0'
});

// Vue.directive('highlight', highlight);
Vue.component('m-hight-light', MHightlight);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  render: h => h(App)
});
