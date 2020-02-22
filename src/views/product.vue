<template>
	<v-card class="mx-auto my-4 pa-0" max-width="450">
		<v-img src="@/assets/vpnimages.jpeg" :aspect-ratio="16/9" class="align-end" height="150px">
			<v-card-title>LinkToWorld VPN Service</v-card-title>
		</v-img>
		<v-card-title>
			<div class="display-5">LinkToWorld VPN 跨域服務</div>
			<div class="title font-weight-regular grey--text mb-0">Ability to search and sending messages without location restrictions!</div>
		</v-card-title>
		<v-row class="px-4 grey--text mb-0" align="center">
			<v-avatar size="70" class="mr-4">
				<v-img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/rocket-512.png" contain></v-img>
			</v-avatar>
			<span>我們的VPN有速度保證,價格也只要市場價的一半！</span>
		</v-row>
		<v-card-title class="justify-center display-5 mt-0">
			<v-btn>
				即將開放試營運</v-btn>
		</v-card-title>

		<v-divider class="my-0 mx-4"></v-divider>

		<v-card-text align="center">
			<!--可在這放methods-->
			<v-chip class="ma-0">
				<v-icon left>vpn_key</v-icon>
				Choose plan
			</v-chip>
		</v-card-text>
	</v-card>
</template>
<script>
	export default {

	}
</script>