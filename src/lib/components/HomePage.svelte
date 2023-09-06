<script>
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
</script>

<main>
	<div class="bg-cover bg-no-repeat bg-[url('$lib/images/gdg-background.png')]">
		<Header />
		<Hero />
	</div>
</main>

<style>
	div {
		height: clamp(750px, calc(100vh), 900px);
	}
</style>
