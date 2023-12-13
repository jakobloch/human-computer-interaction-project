<script lang="ts">
	import CreateDialog from '$lib/components/CreateDialog.svelte';
	import { recipies } from '$lib/stores/stores';
	import RecipieButton from '$lib/components/RecipieButton.svelte';
    import Recipie from '$lib/components/Recipie.svelte';
	import { writable } from 'svelte/store';

	let chosenRecipie = writable<any>([]);

	import { createRadioGroup, melt } from '@melt-ui/svelte';

	const {
		elements: { root, item, hiddenInput },
		helpers: { isChecked }
	} = createRadioGroup({
		defaultValue: 'default'
	});
</script>

<div class="min-h-full">
	<header class="bg-indigo-600 pb-24">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="relative flex items-center justify-center py-5 lg:justify-between">
				<h1 class="text-5xl font-bold text-white">Recipies</h1>
			</div>
		</div>
	</header>
	<main class="-mt-24 pb-8">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1 class="sr-only">Recipies</h1>
			<!-- Main 3 column grid -->
			<div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
				<!-- Left column -->
				<div class="grid grid-cols-1 gap-4">
					<section aria-labelledby="section-2-title">
						<h2 class="sr-only" id="section-2-title">Recipies</h2>
						<div class="overflow-hidden rounded-lg bg-white shadow">
							<div class="p-6 flex flex-col">
								<CreateDialog />
								<div use:melt={$root} class="flex flex-col gap-3 data-[orientation=horizontal]:flex-row" aria-label="View density">
									{#each [...$recipies.entries()] as recipie}
										<RecipieButton name={recipie[0]} {recipie} {item}/>
									{/each}
								</div>
							</div>
						</div>
					</section>
				</div>

				<!-- Right column -->
				<div class="grid grid-cols-1 gap-4 lg:col-span-2">
					<section aria-labelledby="section-1-title">
						<h2 class="sr-only" id="section-1-title">Section title</h2>
						<div class="overflow-hidden rounded-lg bg-white shadow">
							<div class="p-6">
                               
								    <Recipie />
                                
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</main>
</div>
