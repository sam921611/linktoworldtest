import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth';
Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		user: null,
		status: null,
		error: null
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
				.then(() => {
					alert('success')
					// response will have user
					// user will have uid will be updated to the state
					commit('setUser')
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
				//    then裡面的response因報錯有先刪掉
				.then(() => {
					commit('setUser')
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
					commit('setUser',res.user.uid)
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
	}
}
})