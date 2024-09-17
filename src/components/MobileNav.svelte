<script>
	import { Menu, X } from 'lucide-svelte';
	let isOpen = false;
</script>

<nav
	class="z-50 flex w-full items-center justify-between overflow-hidden overflow-x-hidden bg-white p-4 md:hidden"
>
	<button
		onclick={() => {
			isOpen = !isOpen;
		}}
	>
		<Menu class="text-light_brown" />
	</button>
	<div>
		<img src="/logo.png" alt="logo" width="80" height="80" />
	</div>
	<div>
		<img
			class="cursor-pointer object-contain"
			src="/btn-cart.png"
			alt="cart icon"
			width="25"
			height="25"
		/>
	</div>

	{#if isOpen}
		<div class="bg-light_pink absolute left-0 top-0 z-[9999] h-screen w-full space-y-6 p-4">
			<div class="flex items-center justify-between">
				<button
					onclick={() => {
						isOpen = false;
					}}
				>
					<X class="text-light_brown size-10" />
				</button>
				<div>
					<img src="/logo.png" alt="logo" width="80" height="80" />
				</div>
				<div aria-hidden="true"></div>
			</div>
			<div
				class="text-light_brown flex w-full items-center justify-center rounded-lg bg-white py-4 font-noto-sans-jp text-xs font-medium"
			>
				<p>期間限定トライアルセット販売中✨</p>
			</div>
			<div>
				<div class="flex flex-col items-start justify-start space-y-5">
					<div class="text-light_brown flex flex-col items-start space-y-2 font-noto-sans-jp">
						<p class="font-semibold uppercase">Products</p>
						<p class="text-xs font-medium">モイスチャライズセラム</p>
						<p class="text-xs font-medium">エイジングケアセラム</p>
					</div>
					<div
						class="text-light_brown mt-5 flex flex-col items-start space-y-2 font-noto-sans-jp text-sm font-semibold uppercase"
					>
						<p>About</p>
						<p>Shop List</p>
						<p>Login</p>
					</div>
				</div>
			</div>
		</div>
	{/if}
</nav>
