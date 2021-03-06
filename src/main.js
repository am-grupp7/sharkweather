import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'
import store from './store'

createApp(App).use(store).use(router).use(VueApexCharts).mount('#app')
