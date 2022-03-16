import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap/dist/css/bootstrap.min.css"


require('./store/subscriber')

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    const app = createApp(App)
    app.use(store)
    app.use(router)
    app.use(VueAxios, axios)
    app.mount('#app')
})