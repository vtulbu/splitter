<script lang="ts">
	import type { EventHandler, MouseEventHandler } from 'svelte/elements';
	import { tip } from '../stores';

	let button: HTMLButtonElement;

	const onClickBtn: MouseEventHandler<HTMLButtonElement> = (event) => {
		const target = event.target as HTMLButtonElement;
		const value = parseInt(target?.textContent || '0');

		if (value === $tip) {
			tip.set(undefined);
		} else {
			tip.set(value);
		}

		button.animate(
			[
				{
					transform: 'scale(0.9)'
				}
			],
			{
				duration: 150,
				direction: 'alternate-reverse',
				iterations: 1
			}
		);
	};
</script>

<button
	class:active={$tip === parseInt(button?.textContent || '0')}
	bind:this={button}
	on:click={onClickBtn}
>
	<slot />
</button>

<style>
	button {
		background-color: #00474b;
		color: #ffffff;
		font-size: 24px;
		font-weight: 700;
		border: none;
		border-radius: 5px;
		padding: 16px 58px;
		transition: all 0.2s ease;
	}

	button:hover {
		cursor: pointer;
	}

	.active {
		background-color: #26c2ae;
		color: #00474b;
	}
</style>
