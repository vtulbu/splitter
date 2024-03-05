<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import { tip, bill, people } from '../stores';

	let button: HTMLButtonElement;

	const onClickBtn: MouseEventHandler<HTMLButtonElement> = (event) => {
		tip.set(undefined);
		bill.set(0);
		people.set(0);

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

<button bind:this={button} on:click={onClickBtn}>Reset</button>

<style>
	button {
		background-color: #26c2ae;
		color: #00474b;
		font-size: 24px;
		font-weight: 700;
		border: none;
		border-radius: 5px;
		padding: 16px 58px;
		transition: all 0.2s ease;
		text-transform: uppercase;
	}

	button:hover {
		cursor: pointer;
		background-color: #9fe8df;
	}

	@media (min-width: 1440px) {
		button {
			margin-top: auto;
		}
	}
</style>
