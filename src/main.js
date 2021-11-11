import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
    data: {
        currentlyLoggedInUser: "",
        maxPointsAddition: false,
        maxPointsSubtraction: false,
        maxPointsMultiplication: false,
        maxPointsDivision: false
    },

    router,
    render: h => h(App)
}).$mount('#app')
