<template>
	<v-container>
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
			<v-form ref="form" v-model="valid" lazy-validation>
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
						<v-btn @click="submit" small class="body-2" color="success">Submit</v-btn>
					</v-flex>
				</v-layout>
			</v-form>
		</div>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				//				email: "",
				drawer: null,
				password: "",
				error: "",
				//				------------
				valid: true,
				nameRules: [
					v => !!v || 'password is required',
					v => (v && v.length >= 10) || 'password must be more than 10 characters',
				],
				email: "",
				emailRules: [
					v => !!v || 'E-mail is required',
					v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
				],
				select: null,
				items: [
					'Item 1',
					'Item 2',
					'Item 3',
					'Item 4',
				],
				checkbox: false,
			};
		},
		methods: {
			submit() {
				const user = {
					email: this.email,
					password: this.password
				}
				this.$store.dispatch('signUpAction', user).then(this.$router.replace('/'))
				//				錯誤訊息尚未抓取
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