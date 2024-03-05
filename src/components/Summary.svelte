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

	p:last-of-type {
		grid-row: 1/3;
		color: #26c2ae;
		font-size: 32px;
		letter-spacing: 0.67px;
		text-align: center;
		margin: auto;
		font-weight: 700;
	}

	p:first-of-type {
		color: #ffffff;
		font-size: 16px;
		font-weight: 700;
		margin: 0;
	}
</style>
