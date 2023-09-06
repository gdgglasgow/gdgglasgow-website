<script>
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
</script>

<main>
	<div class="top-section">
		<Header />

		<Hero />
	</div>
</main>

<style>
	div {
		height: clamp(750px, calc(100vh), 900px);
		background-size: cover;
		background-repeat: no-repeat;
	}
	@media (min-width: 768px) {
		.top-section {
			background: url('$lib/images/gdg-background.png');
		}
	}
</style>
