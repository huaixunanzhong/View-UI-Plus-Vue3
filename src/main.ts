import { createApp } from 'vue'
import App from './App.vue'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import router from './router'

import './styles/index.less'

const app = createApp(App)

app.use(ViewUIPlus).use(router)

app.mount('#app')
