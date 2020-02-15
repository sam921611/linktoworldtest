<template>
	<v-card max-width="450" class="mx-auto my-3">
		<v-toolbar color="cyan" dark>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>

			<v-toolbar-title>Inbox</v-toolbar-title>

			<v-spacer></v-spacer>

		</v-toolbar>

		<v-list three-line >
			<template v-for="(item, index) in items">
				<v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

				<v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

				<v-list-item v-else :key="item.title" @click="messageShow()" to="/chatbox" target="_blank">
					<v-list-item-avatar>
						<v-img :src="item.avatar"></v-img>
					</v-list-item-avatar>

					<v-list-item-content>
						<!--<v-list-item-title v-text="item.title"></v-list-item-title>-->
						<v-list-item-title v-text="item.name"> </v-list-item-title>
						<v-list-item-subtitle>
							<span class="">{{item.content}}</span>
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</template>
		</v-list>
	</v-card>
</template>

<script>
	export default {
		data: () => ({
			items: [{
					header: 'Today'
				},
				{
					name: '1',
					avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
					title: 'Brunch this weekend?',
					subtitle: "",
					content: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
				},
				{
					divider: true,
					inset: true
				},
				{
					name: '2',
					avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
					title: 'Summer BBQ ',
					subtitle: "to Alex, Scott, Jennifer  ",
					content: "Wish I could come, but I'm out of town this weekend."
				},
				{
					divider: true,
					inset: true
				},
				{
					name: '3',
					avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
					title: 'Oui oui',
					subtitle: "Sandra Adams  ",
					content: "Do you have Paris recommendations? Have you ever been?"
				},
				{
					divider: true,
					inset: true
				},
				{
					name: '4',
					avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
					title: 'Birthday gift',
					subtitle: "Trevor Hansen  ",
					content: "Have any ideas about what we should get Heidi for her birthday?"
				},
				{
					divider: true,
					inset: true
				},
				{
					name: '5',
					avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
					title: 'Recipe to try',
					subtitle: "Britta Holt  ",
					content: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
				},
			],

			tempUsername: '',
			tempMessage: '',
		}),
		methods: {
			messageShow() {
				//				console.log(items)
			}
		},
	}
</script>
<style>
</style>