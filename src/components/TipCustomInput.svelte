<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type { FormEventHandler } from 'svelte/elements';
	import { tip } from '../stores';

	let value = '';

	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('input', value);
	});

	const handleChange: FormEventHandler<HTMLInputElement> = (event) => {
		const { value: val } = event.target as HTMLInputElement;

		const regex = /^[0-9]*$/;

		if (regex.test(val)) {
			value = val;
			dispatch('input', value);
			tip.set(parseInt(value));
		} else {
			(event.target as HTMLInputElement).value = value;
		}
	};

	$: {
		value = $tip && [5, 10, 15, 25, 50].includes($tip) ? '' : $tip?.toString() || '';
	}
</script>

<input
	type="text"
	placeholder="Custom"
	on:input={handleChange}
	bind:value
	disabled={($tip && [5, 10, 15, 25, 50].includes($tip)) || false}
/>

<style>
	input {
		width: 100%;
		border: 1px solid #979797;
		border-radius: 5px;
		background-color: #f3f9fa;
		color: #00474b;
		font-size: 24px;
		font-weight: 700;
		background: var(--url) no-repeat scroll 20px 16px;
		text-align: right;
		padding: 0px;
		padding-right: 12px;
	}
</style>
