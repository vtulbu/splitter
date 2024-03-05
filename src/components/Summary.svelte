<script lang="ts">
	import Button from './Button.svelte';
	import InfoSummary from './InfoSummary.svelte';
	import ResetButton from './ResetButton.svelte';
</script>

<div>
	<InfoSummary>
		<p slot="title">Tip Amount</p>
		<p slot="value">$0.00</p>
	</InfoSummary>

	<InfoSummary>
		<p slot="title">Total</p>
		<p slot="value">$0.00</p>
	</InfoSummary>
	<ResetButton />
</div>

<style scoped>
	div {
		background-color: #00474b;
		border-radius: 15px;
		padding: 36px 24px 24px 24px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
</style>
