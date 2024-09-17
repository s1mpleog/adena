<script>
	const LINKS = ['Products', 'About', 'Shop List'];
</script>

<nav class="mx-auto my-6 hidden max-w-6xl items-center justify-between md:flex">
	<div>
		<img src="/logo.png" alt="logo" width="100" height="100" />
	</div>
	<div
		class="text-light_brown flex items-center justify-center space-x-6 font-noto-sans-jp text-sm"
	>
		{#each LINKS as link}
			<a href="#top">{link}</a>
		{/each}
		<img
			class="cursor-pointer object-contain"
			src="/btn-cart.png"
			alt="cart icon"
			width="15"
			height="15"
		/>
	</div>
</nav>
