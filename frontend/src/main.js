import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import globalComponents from "./global-components";
import utils from "./utils";
import {
    interceptorsSetup,
    interceptorsResponse
} from "@/helpers/interceptors";
import Toaster from "@meforma/vue-toaster";
// css
import "./assets/css/app.css";

const app = createApp(App).use(router).use(Toaster).use(createPinia());


globalComponents(app);
utils(app);

interceptorsSetup();
interceptorsResponse();

app.mount("#app");
