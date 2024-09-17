<script>
	import Button from './Button.svelte';
</script>

<div class="mx-auto max-w-5xl px-2 py-4 md:px-0 md:py-10">
	<div class="my-5">
		<h3 class="text-blue_background font-garamond text-xl font-medium">Concept</h3>
	</div>
	<div
		class="flex flex-col items-center justify-center space-x-0 space-y-6 md:flex-row md:space-x-20 md:space-y-0"
	>
		<div>
			<img class="rounded-full" src="/flower.png" alt="flower" width="300" height="300" />
		</div>
		<div class="mx-auto flex max-w-[270px] flex-col items-start space-y-4">
			<p class="text-light_brown font-noto-sans-jp font-semibold">
				オーガニック原料を中心とした製品で、肌本来の力を取り戻すお手伝いをします。
			</p>
			<p class="text-light_brown/80 max-w-prose text-sm md:text-base">
				この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
			</p>
			<Button className="px-8">View more</Button>
		</div>
	</div>
</div>
