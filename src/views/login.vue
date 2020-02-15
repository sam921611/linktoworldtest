<template>
	<div>
		<div class="error" v-if="error">{{ error.message }}</div>
		<form @submit.prevent="pressed">
			LOGIN
			<div class="email"><input type="email" v-model="email" placeholder="email" /></div>
			<div class="password"><input type="password" v-model="password" placeholder="password" /></div>
			<button type="submit">login</button>
			<button @click="google()">Google login</button>
		</form>
	</div>
</template>
<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
	data() {
		return {
			email: '',
			password: '',
			error: ''
		};
	},
	methods: {
		pressed() {
			firebase
				.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.then(() => {
					this.$router.replace({
						name: 'home'
					});
				})
				.catch(error => (this.error = error));
		},
		google() {
			var provider = new firebase.auth.GoogleAuthProvider();
			firebase
							.auth()
							.signInWithPopup(provider)
							.then(() => {
								// var token = result.credential.accessToken;
								// var user = result.user;
								this.$router.replace({
									name: 'home'
								});
							})
							.catch(error => (this.error = error));
					},
		}
	}
;
</script>

<style lang="scss" scoped>
.error {
	color: red;
	font-size: 18px;
}

input {
	width: 400px;
	padding: 30px;
	margin: 20px;
	font-size: 21px;
}

button {
	width: 400px;
	height: 75px;
	font-size: 100%;
}
</style>
