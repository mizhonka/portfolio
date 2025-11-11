import './assets/main.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import AnimateOnScroll from 'primevue/animateonscroll'

import { createApp } from 'vue'
import App from './App.vue'
import About from './components/About.vue'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.directive('animateonscroll', AnimateOnScroll)
app.component('About', About)
app.mount('#app')
