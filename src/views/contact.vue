<template>
	<v-container wrap color="grey">
		<v-form ref="form" v-model="valid" lazy-validation class="mt-10">
			We will respond to your email ASAP. 我們將會盡快由電子信箱和您聯絡 
			<v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name 姓名" required></v-text-field>
			<v-text-field v-model="email" :rules="emailRules" label="E-mail 電子信箱" required></v-text-field>
			<v-select v-model="select" :items="items" :rules="[v => !!v || 'This selection is required 請輸入此項']" label="Option 項目" required></v-select>
			<v-textarea v-model="message" :rules="messageRules" auto-grow filled label="Message" rows="1" required></v-textarea>
			<v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
				Send 發出
			</v-btn>
		</v-form>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				valid: true,
				name: '',
				nameRules: [
					v => !!v || 'Name is required 請輸入姓名',
					v => (v && v.length <= 10) || 'Name must be less than 10 characters 姓名需小於10個字',
				],
				email: '',
				emailRules: [
					v => !!v || 'E-mail is required 請輸入電子信箱',
					v => /.+@.+\..+/.test(v) || 'E-mail must be valid 請輸入有效電子信箱',
				],
				select: null,
				items: [
					'Qusetions 問題',
					'Apply 申請',
					'Others 其他',
				],
				checkbox: false,
				message: '',
				messageRules: [v => !!v || 'Message is required 請輸入訊息', ],
			}
		},

		methods: {
			validate() {
				if(this.$refs.form.validate()) {
					this.snackbar = true
				}
			},
		},
	}
</script>