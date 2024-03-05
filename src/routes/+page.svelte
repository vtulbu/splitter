<script>
	import Button from '../components/Button.svelte';
	import InputField from '../components/InputField.svelte';
</script>

<div>
	<InputField --url="url(/icon-dollar.svg)" />
	<InputField --url="url(/icon-person.svg)" type="integer" />

	{#each [5, 10, 15, 25, 50] as per}
		<Button>{per}%</Button>
	{/each}
</div>
