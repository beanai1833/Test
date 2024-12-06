import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'
import './assets/css/main.less'
import BaseDirective from './directive'
import { createPinia } from 'pinia'
import Vue3Esign from 'vue3-esign'
import './components/index'
// import 'vant/lib/index.css';
import 'vant/es/dialog/style';
import 'vant/es/toast/style';
import 'lib-flexible/flexible.js'


// import 'vant/es/nav-bar/style';  // 使用了 tsx 


const app = createApp(App)

app.use(BaseDirective)
app.use(createPinia())

app.use(router).use(Vue3Esign).mount('#app')
