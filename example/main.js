import Vue from "vue";
import App from "./App";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  render: h => h(App)
});
