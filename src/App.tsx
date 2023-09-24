import '~/assets/styles/index.ts';

export default function App() {
	return (
		<main class="grid place-items-center min-h-screen bg-[#19A1AD]">
			<img class="absolute h-screen -left-1/2 -top-2/3 lg:(-left-1/10 -top-1/2)" src="/images/bg-pattern-top.svg" alt="" />
			<img class="absolute h-screen -right-1/2 -bottom-2/3 lg:(-right-1/10 -bottom-1/2)" src="/images/bg-pattern-bottom.svg" alt="" />
			<article class="text-center rounded-lg overflow-hidden relative max-w-98vw w-100 isolate pt-28 bg-white shadow-(2xl black/30)">
				<img src="/images/bg-pattern-card.svg" alt="" aria-hidden class="absolute left-0 top-0 w-full -z-1" />
				<img src="/images/image-victor.jpg" alt="avatar" class="mx-auto rounded-full border-(4 white)" />
				<div class="flex gap-2 justify-center mb-2 mt-6">
					<p class="font-bold">Victor Crest</p>
					<p class="text-gray">26</p>
				</div>
				<p class="text-gray text-sm">London</p>
				<ul class="grid-(~ cols-3) p-6 border-t-1 mt-6">
					<FooterElement
						title="80K"
						description="Followers"
					/>
					<FooterElement
						title="803K"
						description="Likes"
					/>
					<FooterElement
						title="1.4K"
						description="Photos"
					/>
				</ul>
			</article>
		</main>
	);
}

function FooterElement(props: { title: string, description: string, }) {
	return (
		<li>
			<p class="text-lg font-bold">{props.title}</p>
			<p class="text-xs text-gray">{props.description}</p>
		</li>
	);
}
