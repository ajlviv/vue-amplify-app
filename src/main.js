import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import AmplifyVue from "@aws-amplify/ui-vue";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

createApp(App).use(AmplifyVue).mount("#app");
