import { createApp } from 'vue'
import App from './App.vue'

import Store from './store' //* Vuex store imported

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
app.use(Store)
app.mount('#app')
