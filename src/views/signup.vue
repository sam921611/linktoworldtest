<template>
	<div>
		<div class="error" v-if="error">{{error.message}}</div>
		<!--<form @submit.prevent="pressed">
			SIGN UP
			<div class="email">
				<input type="email" v-model="email" placeholder="email" />
			</div>
			<div class="password">
				<input type="password" v-model="password" placeholder="password" />
			</div>
			<button type="submit">SIGNUP</button>
		</form>-->
		<v-form class="">
			<v-layout wrap row>
				<v-flex xs12 sm6>
					<v-text-field v-model="email" :rules="emailRules" label="E-mail" required class="mx-7"></v-text-field>
				</v-flex>
				<v-flex xs12 sm6>
					<v-text-field v-model="password" :counter="10" :rules="nameRules" label="Password" required class="mx-7"></v-text-field>
				</v-flex>
			</v-layout>
			<v-layout wrap row justify-center>
				<v-flex xs2 sm1>
					<v-btn @click="signup()" small class="body-2" color="success">Submit</v-btn>
				</v-flex>
			</v-layout>
		</v-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				email: "",
				password: "",
				error: ""
			};
		},
		methods: {
			signup() {
				//				firebase
				//					.auth()
				//					.createUserWithEmailAndPassword(this.email, this.password)
				//					.then(() => {
				//						this.$router.replace({
				//							name: "home"
				//						});
				//					})
				//					.catch(error => (this.error = error));
				const user = {
					email: this.email,
					password: this.password
				}
				this.$store.dispatch('signUpAction', user)
			}
		}
	};
</script>

<style lang="scss" scoped>
	.error {
		color: red;
		font-size: 18px;
	}
</style>