<script>
	import '../app.css';
	import { ThemeWrapper } from 'svelte-theme-switch';
</script>

<ThemeWrapper attribute="class" defaultTheme="light">
	<slot />
</ThemeWrapper>

<style>
	@font-face {
		font-family: 'Gdg';
		src: url('$lib/fonts/Product Sans Regular.ttf');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	/* @font-face {
		font-family: 'Gdg';
		src: url('$lib/fonts/Product Sans Bold.ttf');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Gdg';
		src: url('$lib/fonts/Product Sans Italic.ttf');
		font-weight: normal;
		font-style: italic;
		font-display: swap;
	} */

	:global(body) {
		font-family: 'Gdg', 'sans-serif';
		font-size: 16px;
	}
	:global(html) {
		font-size: 62.5%;
		scroll-behavior: smooth;
	}
</style>
