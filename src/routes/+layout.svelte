<script>
	import '../app.css';
	import { ThemeWrapper } from 'svelte-theme-switch';
</script>

<ThemeWrapper attribute="class">
	<slot />
</ThemeWrapper>

<style>
	@font-face {
		font-family: 'Gdg';
		src: url('$lib/fonts/Product Sans Regular.ttf');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Gdg';
		src: url('$lib/fonts/Product Sans Bold.ttf');
		font-weight: bold;
		font-style: normal;
	}

	@font-face {
		font-family: 'Gdg';
		src: url('$lib/fonts/Product Sans Italic.ttf');
		font-weight: normal;
		font-style: italic;
	}

	:global(body) {
		font-family: 'Gdg';
	}
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
