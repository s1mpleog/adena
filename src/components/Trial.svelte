<script>
	import Button from './Button.svelte';
</script>

<div
	class="relative mx-auto mb-10 grid w-full max-w-5xl grid-cols-1 items-center justify-start space-y-4 rounded-md bg-white px-2 pb-4 md:grid md:grid-cols-2 md:space-y-0 md:px-10 md:pb-0"
>
	<div class="py-4">
		<img src="/trial.png" alt="trial product" width="400" height="400" />
		<!-- mobile only -->
		<div class=" z-50 flex items-center justify-center">
			<div
				class="border-light_pink absolute flex w-fit items-center justify-center rounded-full rounded-l-[70%] rounded-r-[70%] border-[1px] bg-[#D4C9EC] px-4 py-2 text-white md:hidden"
			>
				TRIAL
			</div>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center space-y-6">
		<div
			class="border-light_pink hidden items-center justify-center rounded-full rounded-l-[70%] rounded-r-[70%] border-[1px] bg-[#D4C9EC] px-4 py-2 text-white md:flex"
		>
			TRIAL
		</div>
		<div class="text-light_brown text-center font-noto-sans-jp">
			<p>まずは7dayトライアルサンプルでお試し!</p>
			<p class="font-semibold">トライアルサンプル</p>
		</div>
		<div>
			<h3 class="text-light_brown font-noto-sans-jp">
				<span class="text-4xl font-semibold">￥980</span> (税込)
			</h3>
		</div>
		<div>
			<Button
				className="bg-transparent border-blue_background/50 text-blue_background/80 border-[1px] px-7 font-noto-sans-jp text-sm py-2 rounded-full shadow-none"
				>view more</Button
			>
		</div>
	</div>
</div>
