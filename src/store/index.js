import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth';
Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		user: null,
		status: null,
		error: null,
		//		-----
//		Home頁面資料遷移
//		show: false,
//		news: [{
//				title: 'We are now testing features and will release soon!',
//				content: 'vpn news test'
//			},
//			{
//				title: 'news2',
//				content: 'vpn news test2'
//			}
//		],
//		//		---
//		cycle: true,
//		slides: ['https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg',
//			'https://affnotes.com/wp-content/uploads/2018/05/vpn-guide.jpg',
//			'https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg',
//			'https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg',
//			'https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg'
//		]
	},

	mutations: {

		setUser(state, payload) {
			state.user = payload
		},

		removeUser(state) {
			state.user = null
		},

		setStatus(state, payload) {
			state.status = payload
		},

		setError(state, payload) {
			state.error = payload
		}

	},
	actions: {
		signUpAction({
			commit
		}, payload) {
			commit('setStatus', 'loading')
			firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
				//    then裡面的response因報錯有先刪掉
				//				response.user.uid因報錯有先刪掉
				.then((response) => {
					// response will have user
					// user will have uid will be updated to the state
					commit('setUser',response.user.uid)
					commit('setStatus', 'success')
					commit('setError', null)
				})
				.catch((error) => {
					commit('setStatus', 'failure')
					commit('setError', error.message)
				})
		},

		signInAction({
			commit
		}, payload) {
			firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
				.then((response) => {
					commit('setUser',response.user.uid)
					commit('setStatus', 'success')
					commit('setError', null)
				})
				.catch((error) => {
					commit('setStatus', 'failure')
					commit('setError', error.message)
				})
		},

		googleSignInAction({
			commit
		}) {
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then((res) => {
					// var token = result.credential.accessToken;
					// var user = result.user;
					commit('setUser', res.user.uid);
					//					這一段切換router會報錯 查明中
					//					this.$router.replace({
					//						name: 'home'
					//					}); 
				})
				.catch(error => (alert(error)));
		},

		signOutAction({
			commit
		}) {
			firebase.auth().signOut()
				//    then裡面的response因報錯有先刪掉
				.then(() => {
					commit('setUser', null)
					commit('setStatus', 'success')
					commit('setError', null)
				})
				.catch((error) => {
					commit('setStatus', 'failure')
					commit('setError', error.message)
				})
		}
	},

	getters: {

		status(state) {
			return state.status
		},

		user(state) {
			return state.user
		},

		error(state) {
			return state.error
		},
		show(state) {
			return state.show
		},
		news(state) {
			return state.news
		},
	}
})