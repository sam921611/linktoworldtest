import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import firebase from 'firebase/app'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

const firebaseConfig = {
	apiKey: "AIzaSyDxIld6mN-AuzPMl_ktgKgtiGlSxarBF00",
	authDomain: "linkchattest.firebaseapp.com",
	databaseURL: "https://linkchattest.firebaseio.com",
	projectId: "linkchattest",
	storageBucket: "linkchattest.appspot.com",
	messagingSenderId: "798585863063",
	appId: "1:798585863063:web:080699a1f00cca2b4c22d2"
};

firebase.initializeApp(firebaseConfig);

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app')