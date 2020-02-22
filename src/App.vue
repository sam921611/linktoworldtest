<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app clipped right>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-list dense>
				<v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
					<v-list-item-action>
						<v-icon>{{item.icon}}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{item.title}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				</v-list>
				<!--v-if要放在v-for外面那層 不然報錯-->
				<!--這邊處理auth 登入 註冊顯示～-->
				<v-list v-if="!userLogedIn">
				<v-list-item  v-for="authItem in authItems" :key="authItem.title" :to="authItem.link">
					<v-list-item-action>
						<v-icon>{{authItem.icon}}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{authItem.title}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			
		</v-navigation-drawer>

		<v-app-bar app clipped-left>
			<!--<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />-->
			<v-toolbar-title>
				<router-link to="/" class="white--text">
					<v-btn large>LinkToWorld</v-btn>
				</router-link>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link" large>
					<v-icon left dark>{{ item.icon }}</v-icon>
					{{ item.title }}
				</v-btn>
				<div v-if="!userLogedIn">
				<v-btn flat v-for="authItem in authItems" :key="authItem.title" :to="authItem.link" large>
					<v-icon left dark>{{ authItem.icon }}</v-icon>
					{{ authItem.title }}
				</v-btn>
				</div>
			</v-toolbar-items>
			<v-spacer></v-spacer>
			<v-spacer></v-spacer>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" />
		</v-app-bar>

		<v-content>
			<router-view></router-view>
		</v-content>

		<v-footer app class="justify-center">
			<span>&copy; 2020 LinkToWorld project</span>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		data: () => ({
			drawer: false,
			menuItems: [{
					icon: 'home',
					title: 'Home  主頁',
					link: '/'
				},
				{
					icon: 'local_offer',
					title: 'Product 產品',
					link: '/product'
				},
//				{
//					icon: 'arrow_upward',
//					title: 'Sign up   註冊',
//					link: '/signup'
//				},
//				{
//					icon: 'lock_open',
//					title: 'login 登入',
//					link: '/login'
//				},
				//				{
				//					icon: 'monetization_on',
				//					title: 'Bitcoin  比特幣',
				//					link: '/bitcoin'
				//				},
				{
					icon: 'person',
					title: 'Contact聯絡我們',
					link: '/contact'
				},
				{
					icon: 'person',
					title: 'Profile個人資訊',
					link: '/profile'
				},
				//				{
				//					icon: 'person',
				//					title: 'chat 聊天室',
				//					link: '/chat'
				//				},
			],
			authItems: [{
					icon: 'arrow_upward',
					title: 'Sign up   註冊',
					link: '/signup'
				},
				{
					icon: 'lock_open',
					title: 'login 登入',
					link: '/login'
				}
			]
		}),
		computed:{
			userLogedIn() {
				return this.$store.getters.user
			}
		},
		created() {
			this.$vuetify.theme.dark = true
		},
	}
</script>