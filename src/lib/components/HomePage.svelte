<script>
	import AboutSection from './AboutSection.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import UpcomingEventSection from './UpcomingEventSection.svelte';
</script>

<div
	class="absolute inset-0 -z-50 w-full h-screen bg-no-repeat bg-[url('$lib/images/gdg-background.png')] bg-cover"
	aria-hidden="true"
/>
<Header />
<Hero />
<main>
	<UpcomingEventSection />
	<AboutSection />
</main>
<Footer />
