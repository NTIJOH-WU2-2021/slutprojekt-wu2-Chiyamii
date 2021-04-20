import { createApp } from "vue";
import App from "./App.vue";
import faker from "faker"

const app = createApp(App);

app.config.globalProperties.$faker = faker;
app.mount('#app');
console.log(faker.random)