<script>
	import { draw } from 'svelte/transition';
	import ToAnimate from './ToAnimate.svelte';
	import { bounceIn, quintOut } from 'svelte/easing';
</script>

<svg
	fill="none"
	stroke="currentColor"
	stroke-width="1"
	stroke-linecap="round"
	stroke-linejoin="round"
	width="30"
	height="30"
	viewBox="0 0 30 30"
	xmlns="http://www.w3.org/2000/svg"
	class="animate-bounce"
>
	<ToAnimate>
		<path
			transition:draw={{ duration: 1500, easing: quintOut }}
			xmlns="http://www.w3.org/2000/svg"
			d="M6.54269 0C6.02298 0 5.60279 0.534083 5.60279 1.19466V25.9382L1.59991 20.8855C1.22948 20.4216 0.637894 20.4216 0.27299 20.8925C-0.0919128 21.3633 -0.0919133 22.1152 0.278519 22.5791L5.87923 29.6557C6.06168 29.8876 6.29942 30 6.54269 30C6.78596 30 7.0237 29.8876 7.20615 29.6557L12.8124 22.5791C13.1828 22.1152 13.1828 21.3563 12.8179 20.8925C12.453 20.4216 11.8559 20.4216 11.491 20.8855L7.48259 25.9382V1.19466C7.48259 0.54111 7.0624 0 6.54269 0Z"
			transform="translate(10, 0)"
		/>
	</ToAnimate>
</svg>
