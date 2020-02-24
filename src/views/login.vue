<template>
	<v-container>
			<div class="error" v-if="error">{{ error }}</div>
			<!--<form @submit.prevent="pressed">
			LOGIN
			<div class="email"><input type="email" v-model="email" placeholder="email" /></div>
			<div class="password"><input type="password" v-model="password" placeholder="password" /></div>
			<button type="submit">login</button>
			<button @click="google()">Google login</button>
		</form>-->

			<v-form ref="form" v-model="valid" lazy-validation class="my-10">
				<v-layout wrap row>
					<v-flex xs12 sm6>
						<v-text-field v-model="email" :rules="emailRules" label="E-mail" required class="mx-2"></v-text-field>
					</v-flex>
					<v-flex xs12 sm6>
						<v-text-field v-model="password" :counter="10" :rules="nameRules" label="Password" required class="mx-2"></v-text-field>
					</v-flex>
				</v-layout>
				<v-layout wrap row>
					<v-flex xs2 sm4>
						<v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required class="mx-2"></v-select>
					</v-flex>
					<v-flex xs3 sm3>
						<v-checkbox id="agree" v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
					</v-flex>
					<v-flex xs3 sm2>
						<v-btn  color="success" @click="pressed()" class="mt-3 mr-3" small >Submit</v-btn>
					</v-flex>
					<v-flex xs4 sm3>
						<v-btn @click="google()" color="success" class="mt-3" small>Google login</v-btn>
					</v-flex>
				</v-layout>
				<v-layout wrap row justify-center>
					<v-flex sm6 xs0></v-flex>
					<v-flex sm2 xs3>
						<v-btn :disabled="!valid" color="success" class="mr-3 ml-1" @click="validate" small>
							Validate
						</v-btn>
					</v-flex>
					<v-flex sm2 xs4>
						<v-btn color="error" class="body-2 ml-2" @click="reset" small>
							Reset Form
						</v-btn>
					</v-flex>
					<v-flex sm2 xs5>
						<v-btn color="warning" class="mr-0" @click="resetValidation" small>
							Reset Validation
						</v-btn>
					</v-flex>
				</v-layout>
			</v-form>
	</v-container>
</template>
<script>
//	import * as firebase from 'firebase/app';
//	import 'firebase/auth';
	export default {
		data() {
			return {
				//				email: '',
				password: '',
				error: '',
				//				-------
				valid: true,
				nameRules: [
					v => !!v || 'password is required',
					v => (v && v.length >= 10) || 'password must be more than 10 characters',
				],
				email: '',
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
			validate() {
				if(this.$refs.form.validate()) {
					this.snackbar = true
				}
			},
			reset() {
				this.$refs.form.reset()
			},
			resetValidation() {
				this.$refs.form.resetValidation()
			},

			pressed() {
				const user = {
					email: this.email,
					password: this.password
				}
				this.$store.dispatch('signInAction', user).then(this.$router.replace('/'))
//				錯誤訊息尚未抓取
			},
			google() {
				this.$store.dispatch('googleSignInAction').then(this.$router.replace('/'))
			},
		}
	}
</script>

<style lang="scss" scoped>
	#agree {
		font-size: 3px!important;
	}
	
	.error {
		color: red;
		font-size: 18px;
	}
	/*input {
		width: 400px;
		padding: 30px;
		margin: 20px;
		font-size: 21px;
	}*/
	/*button {
		width: 40px;
		height: 75px;
		font-size: 100%;
	}*/
</style>