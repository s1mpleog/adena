<script>
	import ProductCard from './ProductCard.svelte';
</script>

<div class="mx-auto my-12 max-w-5xl px-2 md:my-3 md:px-0">
	<div class="my-2 md:my-5">
		<h3 class="text-blue_background font-garamond text-xl font-medium">Products</h3>
	</div>
	<div
		class="flex flex-col items-center space-x-0 space-y-5 py-10 md:flex-row md:space-x-4 md:space-y-0"
	>
		<ProductCard
			imgUrl="/product-1-test.png"
			title="モイスチャライズセラム"
			description="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。"
		/>
		<ProductCard
			imgUrl="/product-2.png"
			title="エイジングケアセラム"
			description="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。"
		/>
	</div>
</div>
