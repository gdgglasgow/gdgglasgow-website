<script>
	import { themeStore } from 'svelte-theme-switch';
	import LogoIcon from './LogoIcon.svelte';
	import SecondaryButton from './SecondaryButton.svelte';
	import LinkButton from './LinkButton.svelte';

	const onToggleClick = () =>
		$themeStore.setTheme($themeStore.theme === 'light' ? 'dark' : 'light');
</script>

<header class="px-2 inset-0 w-full sticky top-[2rem] z-50">
	<nav class="container mt-0 mx-auto">
		<div
			class="flex justify-between container m-auto w-full md:w-fit gap-10 items-center px-8 py-3 bg-dark/90 dark:bg-stone-50/80 text-white dark:text-dark rounded-xl text-sm min-h-[3rem]"
		>
			<a href="/"><LogoIcon /></a>
			<ul class="flex gap-10">
				<li>
					<a href="/">
						<LinkButton>About</LinkButton>
					</a>
				</li>
				<li><a href="/"><LinkButton>Sponsors</LinkButton></a></li>
			</ul>
			<div class="flex gap-3 items-center">
				<div
					role="button"
					class="btn--toggle w-4 h-4 rounded-full aspect-square"
					aria-labelledby="Switch Theme"
					tabindex="0"
					on:click={onToggleClick}
					on:keydown={onToggleClick}
					on:keypress={onToggleClick}
				/>
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
