<script>
	import 'normalize.css';
	import { flip } from 'svelte/animate';
	import { fade, scale, slide, fly } from 'svelte/transition';

	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<main>
	{#if ready}
		<h1 transition:fade>Splitter</h1>
	{/if}

	{#if ready}
		<div transition:fly={{ y: 900, duration: 900 }}>
			<slot />
		</div>
	{/if}
</main>

<style>
	:global(body) {
		font-family: 'Space Mono', monospace;
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(p) {
		margin: 0;
	}

	main {
		background-color: #c5e4e7;
		height: 100vh;
		padding-top: 50px;
		display: flex;
		flex-direction: column;
		min-width: 375px;
		min-height: 700px;
	}

	h1 {
		text-transform: uppercase;
		margin: 0;
		margin-bottom: 40px;
		word-break: break-all;
		width: 140px;
		letter-spacing: 10px;
		align-self: center;
		color: #3d6666;
		font-weight: 400;
	}

	div {
		background-color: #fff;
		padding: 32px;
		border-radius: 25px 25px 0 0;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	@media (min-width: 1440px) {
		main {
			padding: 80px 260px 240px 260px;
			max-height: 1024px;
			height: 100vh;
			align-items: center;
		}

		h1 {
			margin-bottom: 90px;
		}

		div {
			border-radius: 25px;
			padding: 32px;
			padding-left: 48px;
			-webkit-box-shadow: 0px 0px 43px 0px rgba(79, 166, 175, 0.2);
			-moz-box-shadow: 0px 0px 43px 0px rgba(79, 166, 175, 0.2);
			box-shadow: 0px 0px 43px 0px rgba(79, 166, 175, 0.2);
			max-width: 1020px;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 100px 250px 100px;
			column-gap: 48px;
			row-gap: 40px;
		}
	}
</style>
