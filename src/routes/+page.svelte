<script>
	import Button from '../components/Button.svelte';
	import InputField from '../components/InputField.svelte';
	import Label from '../components/Label.svelte';
	import Summary from '../components/Summary.svelte';
</script>

<div>
	<Label>Bill</Label>
	<InputField --url="url(/icon-dollar.svg)" />
</div>
<div>
	<Label>Select Tip %</Label>
	{#each [5, 10, 15, 25, 50] as per}
		<Button>{per}%</Button>
	{/each}
</div>

<div>
	<Label>Number of People</Label>
	<InputField --url="url(/icon-person.svg)" type="integer" />
</div>
<Summary />

<style>
</style>
