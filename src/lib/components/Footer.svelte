<script lang="ts">
	import LogoIcon from './LogoIcon.svelte';
	const navLinks = [
		{ label: 'About', href: '/#about', alt: 'About Us Section' },
		{
			label: 'Sponsors',
			href: 'https://gdg.community.dev/gdg-glasgow/#local-partners',
			alt: 'Sponsors Page'
		},
		{
			label: 'Learn more',
			href: 'https://gdg.community.dev/gdg-glasgow/',
			alt: 'GDG Community official page'
		}
	];
</script>

<footer>
	<div
		class="container m-auto px-2 md:px-4 py-10 max-w-[1028px] border-t flex flex-col md:flex-row gap-4 md:gap-10"
	>
		<div class="flex items-center gap-2 m-auto md:mx-0">
			<LogoIcon />
			<div class="text-gray-500 dark:text-gray-400">
				&copy; {new Date().getFullYear() || 2023}
				<span>GDG Glasgow</span>
			</div>
		</div>
		<div>
			<ul class="flex gap-8 w-fit m-auto md:mx-0 justify-between md:justify-start">
				{#each navLinks as { href, label }}
					<li class="hover:underline">
						<a {href} class="hover:underline">{label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
