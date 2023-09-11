<script>
	import AboutSection from './AboutSection.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import UpcomingEventSection from './UpcomingEventSection.svelte';
</script>

<main>
	<div class="bg-cover bg-no-repeat bg-[url('$lib/images/gdg-background.png')] h-fit">
		<Header />
		<Hero />
	</div>
	<UpcomingEventSection />
	<AboutSection />
	<Footer />
</main>
