import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "./styles.scss";

const { createApp } = Vue;

Vue.use(ElementUI);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
