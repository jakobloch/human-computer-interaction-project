<script lang="ts">
	import NewRecipeDialog from '$lib/components/NewRecipeDialog.svelte';
	import { recipes } from '$lib/stores/stores';
	import RecipeButton from '$lib/components/RecipeButton.svelte';
    import Recipe from '$lib/components/Recipe.svelte';
	import { writable } from 'svelte/store';

	let chosenRecipe = writable<any>([]);

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
				<h1 class="text-5xl font-bold text-white">Recipes</h1>
			</div>
		</div>
	</header>
	<main class="-mt-24 pb-8">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1 class="sr-only">Recipes</h1>
			<!-- Main 3 column grid -->
			<div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
				<!-- Left column -->
				<div class="grid grid-cols-1 gap-4">
					<section aria-labelledby="section-2-title">
						<h2 class="sr-only" id="section-2-title">Recipes</h2>
						<div class="overflow-hidden rounded-lg bg-white shadow">
							<div class="p-6 flex flex-col">
								<NewRecipeDialog />
								<div use:melt={$root} class="flex flex-col gap-3 data-[orientation=horizontal]:flex-row" aria-label="View density">
									{#each [...$recipes.entries()] as recipe}
										<RecipeButton name={recipe[0]}  {item}/>
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
                               
								    <Recipe />
                                
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</main>
</div>
