<script lang="ts">
	import ToAnimate from './ToAnimate.svelte';
	import DownArrow from './DownArrow.svelte';
	import Instagram from '$lib/svgIcons/Instagram.svelte';
	import Linkedin from '$lib/svgIcons/Linkedin.svelte';
	import Mail from '$lib/svgIcons/Mail.svelte';
	import TwitterX from '$lib/svgIcons/TwitterX.svelte';
	import Youtube from '$lib/svgIcons/Youtube.svelte';
	import LinkButton from './LinkButton.svelte';
	import { quintOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
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

<span class="flex gap-4 items-center">
	{#each socials as { href, icon, alt }, i (i)}
		<ToAnimate>
			<a
				{href}
				aria-label={alt + ' link'}
				title="{`Visit our ${alt} page`}}"
				target="_blank"
				in:fly={{ x: 50, duration: 500, easing: quintOut, delay: i * 100 }}
			>
				<span>
					<svelte:component this={icon} />
				</span>
			</a>
		</ToAnimate>
	{/each}
</span>
