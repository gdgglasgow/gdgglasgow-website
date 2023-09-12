<script>
	import { fly } from 'svelte/transition';
	import Container from './Container.svelte';
	import ImageSlides from './ImageSlides.svelte';
	import LinkButton from './LinkButton.svelte';
	import PrimaryButton from './PrimaryButton.svelte';
	import { quintOut } from 'svelte/easing';
	import ToAnimate from './ToAnimate.svelte';
	import DownArrow from './DownArrow.svelte';
	import Socials from './Socials.svelte';
	import Mail from '$lib/svgIcons/Mail.svelte';
</script>

<section class="py-10 mt-4">
	<Container>
		<div class="flex gap-10 flex-col md:flex-row items-center justify-between md:space-x-4">
			<div class="space-y-10 w-full md:w-1/2">
				<h1
					class="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 dark:text-light"
					aria-level={1}
				>
					Unlock Glasgow's tech potential.
				</h1>
				<div class="text-xl">
					<p>
						<span
							>Building the tech future of the vibrant heart of Scotland, one contribution at a
							time.</span
						>
						<br />
						<span>Join us and help shape the future of tech in Glasgow.</span>
					</p>
				</div>
				<a class="block" href="https://gdg.community.dev/gdg-glasgow/">
					<PrimaryButton>Join our community</PrimaryButton>
				</a>
			</div>
			<div
				class="relative w-full h-auto rounded-xl overflow-hidden md:w-[38.4rem] md:min-h-[51.2rem] aspect-square md:aspect-[3/4] md:ml-auto"
			>
				<ToAnimate>
					<div
						class="w-full h-full rounded-xl overflow-hidden"
						in:fly={{ y: 50, duration: 500, easing: quintOut }}
					>
						<ImageSlides />
					</div>
				</ToAnimate>
			</div>
		</div>
		<div class="space-y-3 mt-8 flex-wrap">
			<div class="space-y-0">
				<h6>Get in touch:</h6>
				<LinkButton>
					<a href="mailto:gdgglasgow@gmail.com" class="flex items-center gap-1">
						<Mail />
						<div class=" align-middle" aria-label="Email: gdgglasgow@gmail.com">
							gdgglasgow@gmail.com
						</div>
					</a>
				</LinkButton>
			</div>
			<Socials />
		</div>
		<div class="mt-6 hidden md:flex items-center justify-center"><DownArrow /></div>
	</Container>
</section>
