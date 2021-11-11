import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
    data: {
        currentlyLoggedInUser: "",
        theme: new Audio(require("../src/assets/theme.mp3")),
        buttonSound: new Audio(require("../src/assets/clickButton.mp3"))
    },

    router,
    render: h => h(App)
}).$mount('#app')
