<script>
	// @ts-nocheck

	let { className = '', children } = $props();
</script>

<button
	class={`text-blue_background rounded-2xl bg-white px-6 py-2 font-noto-sans-jp text-sm capitalize shadow-md transition-all hover:opacity-75 ${className}`}
>
	{@render children()}
</button>
