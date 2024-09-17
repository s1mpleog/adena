<script lang="ts">
	import Button from './Button.svelte';

	export let imgUrl: string;
	export let title: string;
	export let description: string;
</script>

<div class="mb-4 flex w-full flex-col items-start justify-center space-y-4">
	<div class="">
		<img class=" object-contain" src={imgUrl} alt={title} width="400" height="400" />
	</div>
	<div class="max-w-sm space-y-3">
		<h2 class="text-light_brown font-noto-sans-jp font-semibold">{title}</h2>
		<p class="text-light_brown/80 mx-auto max-w-prose font-noto-sans-jp text-sm">{description}</p>
	</div>
	<div>
		<Button className="font-noto-sans-jp text-xs">view more</Button>
	</div>
</div>
