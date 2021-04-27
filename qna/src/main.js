import { createApp } from "vue";
import App from "./App.vue";
import faker from "faker";
import router from "router";

const app = createApp(App);

//app.use(('vue-faker'));

app.config.globalProperties.$faker = faker;
app.use(router);
app.mount('#app');
console.log(faker.random)
