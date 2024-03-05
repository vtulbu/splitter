<script lang="ts">
</script>

<div>
	<slot name="title" />
	<p>/ person</p>
	<slot name="value" />
</div>

<style>
	p {
		color: #7f9d9f;
		font-weight: 700;
		font-size: 14px;
		grid-row: 2/3;
	}

	div {
		display: grid;
		grid-template-columns: 1fr 100px;
		grid-template-rows: 1fr 1fr;
		gap: 12px;
	}

	:global(p:last-of-type) {
		grid-row: 1/3;
		color: #26c2ae;
		font-size: 32px;
		letter-spacing: 0.67px;
		text-align: center;
		margin: auto;
		font-weight: 700;
	}

	:global(p:first-of-type) {
		color: #ffffff;
		font-size: 16px;
		font-weight: 700;
		margin: 0;
	}
</style>
