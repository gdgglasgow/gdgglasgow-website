<script lang="ts">
	import { themeStore } from 'svelte-theme-switch';
	import LogoIcon from './LogoIcon.svelte';

	const onToggleClick = () =>
		$themeStore.setTheme($themeStore.theme === 'light' ? 'dark' : 'light');

	const navLinks = [
		{ label: 'About', href: '/#about', alt: 'About Us Section' },
		{
			label: 'Sponsors',
			href: 'https://gdg.community.dev/gdg-glasgow/#local-partners',
			alt: 'Sponsors Page'
		}
	];
</script>

<header class="px-2 inset-0 w-full sticky top-[4rem] z-50">
	<nav class="container mt-0 mx-auto">
		<div
			class="flex flex-col md:flex-row md:justify-between container m-auto w-full sm:w-fit gap-3 md:gap-10 items-center px-8 py-3 bg-dark/90 dark:bg-stone-50/80 text-white dark:text-dark rounded-xl text-sm min-h-[5rem]"
		>
			<a href="/" aria-label="Go to the GDG Glasgow homepage">
				<span
					class="flex items-center gap-1 text-xl font-semibold text-stone-300 dark:text-stone-500"
					role="img"
					aria-label="GDG Glasgow logo"
				>
					<LogoIcon />
					<span>GDG Glasgow</span>
				</span>
			</a>
			<div class="flex gap-8 w-fit m-auto md:mx-0">
				<ul class="flex gap-8 justify-between md:gap-10">
					{#each navLinks as { href, label, alt }}
						<li>
							<a {href} class="hover:underline" aria-label={`Go to ${alt}`} title={`Go to ${alt}`}
								>{label}</a
							>
						</li>
					{/each}
				</ul>
				<div class="flex gap-3 items-center">
					<button
						aria-label="Toggle Theme"
						class="btn--toggle w-4 h-4 rounded-full aspect-square"
						tabindex="0"
						on:click={onToggleClick}
					/>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
	.btn--toggle {
		background-image: linear-gradient(270deg, currentcolor 50%, transparent 50%, transparent 100%);
		box-shadow: currentcolor 0px 0px 0px 1px;
	}
</style>
