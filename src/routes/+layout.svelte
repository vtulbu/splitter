<script>
	import 'normalize.css';
</script>

<main>
	<h1>Splitter</h1>
	<div>
		<slot />
	</div>
</main>

<style>
	:global(body) {
		font-family: 'Space Mono', monospace;
	}

	main {
		background-color: #c5e4e7;
		height: calc(100vh - 50px);
		padding-top: 50px;
		display: flex;
		flex-direction: column;
		min-width: 375px;
		min-height: 700px;
	}

	h1 {
		text-transform: uppercase;
		margin: 0;
		margin-bottom: 40px;
		word-break: break-all;
		width: 140px;
		letter-spacing: 10px;
		align-self: center;
		color: #3d6666;
		font-weight: 400;
	}

	div {
		background-color: #fff;
		padding: 32px;
		border-radius: 25px 25px 0 0;
		flex-grow: 1;
	}

	@media (min-width: 1440px) {
		main {
			padding: 160px 260px 240px 260px;
			max-height: 1024px;
			height: calc(100vh - 400px);
		}

		div {
			border-radius: 25px;
			padding: 32px;
			padding-left: 48px;
			-webkit-box-shadow: 0px 0px 43px 0px rgba(79, 166, 175, 0.2);
			-moz-box-shadow: 0px 0px 43px 0px rgba(79, 166, 175, 0.2);
			box-shadow: 0px 0px 43px 0px rgba(79, 166, 175, 0.2);
		}
	}
</style>
