<script>
	import { onMount } from 'svelte';

	const carouselPhotos = [
		'https://picsum.photos/300/200?random=1',
		'https://picsum.photos/300/200?random=2',
		'https://picsum.photos/300/200?random=3',
		'https://picsum.photos/300/200?random=4'
	];

	let firstIndex = 0;
	let secondIndex = 1;
	let showFirst = true;

	onMount(() => {
		setInterval(() => {
			if (showFirst) {
				secondIndex = (secondIndex + 1) % carouselPhotos.length;
			} else {
				firstIndex = (firstIndex + 1) % carouselPhotos.length;
			}
			showFirst = !showFirst;
		}, 5000);
	});

	const imageClasses =
		'absolute transition-opacity duration-1000 w-full h-full object-cover dark:grayscale';
</script>

<img class={imageClasses} src={carouselPhotos[firstIndex]} alt="" />
<img
	class={imageClasses}
	src={carouselPhotos[secondIndex]}
	alt=""
	class:opacity-100={!showFirst}
	class:opacity-0={showFirst}
/>
