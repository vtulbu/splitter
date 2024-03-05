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
		grid-template-columns: 1fr 0.2fr;
		grid-template-rows: 1fr 1fr;
		gap: 12px;
	}
</style>
