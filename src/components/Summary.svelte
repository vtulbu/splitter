<script lang="ts">
	import InfoSummary from './InfoSummary.svelte';
	import ResetButton from './ResetButton.svelte';
	import { tip, bill, people } from '../stores';

	$: tipAmount = (($bill || 0) * ($tip || 0)) / 100 / ($people || 1) || 0;
	$: total = ($bill || 0) / ($people || 1) + tipAmount || 0;
</script>

<div>
	<InfoSummary>
		<p slot="title">Tip Amount</p>
		<p slot="value">
			{tipAmount.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			})}
		</p>
	</InfoSummary>

	<InfoSummary>
		<p slot="title">Total</p>
		<p slot="value">
			{total.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD',
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			})}
		</p>
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
		margin-left: auto;
		font-weight: 700;
	}

	p:first-of-type {
		color: #ffffff;
		font-size: 16px;
		font-weight: 700;
		margin: 0;
	}
</style>
