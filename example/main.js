import Vue from "vue";
import App from "./App";

import { highlight } from '../src/main';
import MHightlight from '../src/main';
Vue.use(highlight, {
  className: 'red',
  style: 'color: #00f'
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
