<script>
	import Instagram from '$lib/svgIcons/Instagram.svelte';
	import Linkedin from '$lib/svgIcons/Linkedin.svelte';
	import Mail from '$lib/svgIcons/Mail.svelte';
	import TwitterX from '$lib/svgIcons/TwitterX.svelte';
	import Youtube from '$lib/svgIcons/Youtube.svelte';
	import Container from './Container.svelte';
	import ImageSlides from './ImageSlides.svelte';
	import LinkButton from './LinkButton.svelte';
	import PrimaryButton from './PrimaryButton.svelte';

	const socials = [
		{
			href: 'https://www.instagram.com/gdgglasgow/',
			icon: Instagram,
			alt: 'Instagram'
		},
		{
			href: 'https://www.linkedin.com/company/gdg-glasgow/',
			icon: Linkedin,
			alt: 'LinkedIn'
		},
		{
			href: 'https://twitter.com/gdgglasgow',
			icon: TwitterX,
			alt: 'Twitter'
		},
		{
			href: 'https://www.youtube.com/@gdgglasgow',
			icon: Youtube,
			alt: 'YouTube'
		}
	];
</script>

<section class="py-10">
	<Container>
		<div class="flex gap-10 flex-col md:flex-row items-center justify-between md:space-x-4">
			<div class="space-y-10 w-full md:w-1/2">
				<h1 class="text-6xl text-primary dark:text-light" aria-level={1}>
					Unlock Glasgow's Tech Potential
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
				<PrimaryButton>Join our community</PrimaryButton>
			</div>
			<div
				class="relative w-full h-auto rounded-xl overflow-hidden md:w-[24rem] aspect-square md:aspect-[3/4]"
			>
				<ImageSlides />
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
			<span class="flex gap-4 items-center">
				{#each socials as { href, icon, alt }}
					<a {href} aria-label={alt + ' link'} title="{`Visit our ${alt} page`}}" target="_blank">
						<svelte:component this={icon} />
					</a>
				{/each}
			</span>
		</div>
	</Container>
</section>
