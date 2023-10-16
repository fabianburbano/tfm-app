import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import DataTable from "primevue/datatable";
import Button from 'primevue/button';
import Column from "primevue/column";
import Panel from "primevue/panel";
import Menubar from "primevue/menubar";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Password from 'primevue/password';
import Toast from 'primevue/toast';
import ProgressSpinner from 'primevue/progressspinner';

import "primevue/resources/themes/nova-accent/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue);
app.component("Toast", Toast);
app.use(ToastService);
app.mount("#app");
app.component("DataTable", DataTable);
app.component("Button", Button);
app.component("Column", Column);
app.component("Panel", Panel);
app.component("Menubar", Menubar);
app.component("Dialog", Dialog);
app.component("InputText", InputText);
app.component("Password", Password);
app.component("ProgressSpinner", ProgressSpinner);



