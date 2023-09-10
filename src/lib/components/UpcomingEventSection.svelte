<script lang="ts">
	import PrimaryButton from './PrimaryButton.svelte';

	const event = {
		title: 'DevFest Scotland 2023',
		extra: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
		description:
			"DevFests are local tech conferences hosted by Google Developer Groups (GDGs) around the world, filled with talks, demos, and workshops about the latest in tech. This year, the GDG squads from Glasgow and Edinburgh are teaming up for DevFest Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿 right in the heart of Glasgow. Dive into Google's newest stuff and more, learn from the experts, and network with the community!",
		date: '2023-11-25',
		// dateString: 'Sat, Nov 25, 9:00 AM (GMT)',
		location: '105 Brunswick St - 105 Brunswick Street Glasgow City, G1 1TF',
		link: 'https://gdg.community.dev/events/details/google-gdg-glasgow-presents-devfest-scotland-2023/cohost-gdg-glasgow'
	};

	const convertDate = (date: string) => {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const d = new Date(date);
		return `${days[d.getDay()]}, ${d.getDate()}, ${months[d.getMonth()]}, ${d.getFullYear()}`;
	};
</script>

<section id="about" class="py-10">
	<div class="m-auto px-2 md:px-4 py-10 max-w-[1028px]">
		<h2
			class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-900 mb-6"
		>
			Coming up...
		</h2>
		<article>
			<h3 class="text-5xl">
				<span class="">{event.title}</span>
				{event.extra}
			</h3>
			<p class="text-2xl mt-8">
				{event.description}
			</p>
			<div class="space-y-3 mt-8">
				<div class="text-xl">
					<span>🗓</span>{' '}
					<time datetime={event.date}>
						{convertDate(event.date)}
					</time>
				</div>
				<div class="text-xl">
					<span>📍</span>{' '}
					{event.location}
				</div>
			</div>
			<a class="block mt-10" href={event.link}>
				<PrimaryButton>Book Tickets</PrimaryButton>
			</a>
		</article>
	</div>
</section>
