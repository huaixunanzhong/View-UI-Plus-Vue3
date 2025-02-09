import ViewUIPlus from 'view-ui-plus'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './styles/index.less'

const app = createApp(App)

app.use(ViewUIPlus)
app.use(router)
app.use(pinia)

app.mount('#app')
