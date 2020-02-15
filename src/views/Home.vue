<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm6>
				<!------------------跑馬燈開始----------------->
				<v-card elevation="24" max-width="444" class="mx-auto">
					<v-system-bar lights-out></v-system-bar>
					<v-carousel interval="3000" continuous="true" :cycle="cycle" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-minus" height="170">
						<v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide">
							<!--<v-sheet :color="colors[i]" height="100%" tile>-->
							<!--<v-row class="fill-height" align="center" justify="center">
						<div class="display-3">{{ slide }} Slide</div>
					</v-row>-->
							<!--</v-sheet>-->
						</v-carousel-item>
					</v-carousel>
					<v-list two-line>
						<v-list-item>
							<v-list-item-avatar><v-img src="https://cdn.unwire.hk/wp-content/uploads/2019/10/Best-Free-VPN-3-920x613.jpg"></v-img></v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title>LinkToWorld.tech</v-list-item-title>
								<v-list-item-subtitle>Creator</v-list-item-subtitle>
								<v-list-item-title>Providing a stable service</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-card>
				<!------------------跑馬燈結束----------------->
			</v-flex>
			<!-------------------->
			<v-flex xs12 sm6>
				<v-card class="mt-6" rounded outlined>
					<v-card-title class="mb-2">
						<div class="questrial body-2 font-weight-bold">Announcements 公告區</div>
						<v-spacer></v-spacer>
						<v-btn to="/product" small><v-icon small>open_in_new</v-icon></v-btn>
					</v-card-title>
					<v-divider></v-divider>
					<!--循環新聞-->

					<v-expansion-panels popout>
						<v-expansion-panel v-for="(item, i) in news" :key="i">
							<v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
							<v-expansion-panel-content>
								{{item.content}}
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
				</v-card>
			</v-flex>
			<!---------------->
			<!--<v-flex xs12 sm6>
				<v-card elevation="24" max-width="444" class="mx-auto">
					<v-system-bar lights-out></v-system-bar>
					<v-carousel interval="3000" continuous="true" :cycle="cycle" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-minus" height="170">
						<v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide">
						</v-carousel-item>
					</v-carousel>
					<v-list two-line>
						<v-list-item>
							<v-list-item-avatar>
								<v-img src="https://cdn.unwire.hk/wp-content/uploads/2019/10/Best-Free-VPN-3-920x613.jpg"></v-img>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title>LinkToWorld.tech</v-list-item-title>
								<v-list-item-subtitle>Creator</v-list-item-subtitle>
								<v-list-item-title>Providing a stable service</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-card>
			</v-flex>-->
		</v-layout>
	</v-container>
	<!--------------------->
</template>

<!--<script>
export default {
name: 'home',
components: {
    HelloWorld
}
}
</script>-->

<script>
export default {
	data() {
		return {
			//				colors: [
			//					'green',
			//					'secondary',
			//					'yellow darken-4',
			//					'red lighten-2',
			//					'orange darken-1',
			//				],
			show: false,
			news: [
				{
					title: 'We are now testing features and will release soon!',
					content: 'vpn news test'
				},
				{
					title: 'news2',
					content: 'vpn news test2'
				}
			],
			//				------
			cycle: true,
			slides: [
				'https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg',
				'https://affnotes.com/wp-content/uploads/2018/05/vpn-guide.jpg',
				'https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg',
				'https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg',
				'https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg'
			]
		};
	},
	created() {}
};
</script>
