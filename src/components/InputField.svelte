<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import type { FormEventHandler } from 'svelte/elements';

	export let value = '';
	let error = false;
	export let type: 'integer' | undefined = undefined;

	const dispatch = createEventDispatcher();

	onMount(() => {
		dispatch('input', value);
	});

	const handleChange: FormEventHandler<HTMLInputElement> = (event) => {
		const { value: val } = event.target as HTMLInputElement;

		const changeValue = (regex: RegExp) => {
			if (regex.test(val)) {
				value = val;
				dispatch('input', value);
			} else {
				(event.target as HTMLInputElement).value = value;
			}
		};

		if (type === 'integer') {
			const regex = /^[0-9]*$/;
			changeValue(regex);
		} else {
			const regex = /^[0-9]*\.?[0-9]*$/;
			changeValue(regex);
		}
	};
</script>

<input type="text" on:input={handleChange} class:error bind:value />

<style>
	input {
		width: 100%;
		border: 1px solid #979797;
		border-radius: 5px;
		background-color: #f3f9fa;
		color: #00474b;
		font-size: 24px;
		font-weight: 700;
		height: 48px;
		background: var(--url) no-repeat scroll 20px 16px;
		text-align: right;
		padding-right: 16px;
	}

	input:hover {
		outline: 2px solid #26c2ae;
		cursor: pointer;
	}

	input:focus {
		outline: 2px solid #26c2ae;
	}

	.error {
		border: 2px solid #e17052;

		&:hover {
			outline: 1px solid #e17052;
		}

		&:focus {
			outline: 1px solid #e17052;
		}
	}
</style>
