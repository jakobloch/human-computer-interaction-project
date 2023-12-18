<script>
	import { chosenRecipe } from '$lib/stores/stores';
	import { Settings } from 'lucide-svelte';
</script>

<section class="flex flex-col items-center">
	{#if $chosenRecipe != null}
		<div class="flex">
			<h1 class="text-3xl">{$chosenRecipe?.name}</h1>
			<button class="text-gray-300 hover:text-gray-400 active:text-gray-500">
				<Settings />
			</button>
		</div>

		<h2 class="text-xl">Ingredients</h2>
		<ul class="list-disc text-lg">
			{#if $chosenRecipe}
				{#each $chosenRecipe.ingredients as ingredient}
					<li>{ingredient.amount + ' ' + ingredient.measurement + ' ' + ingredient.name}</li>
				{/each}
			{/if}
		</ul>

		<h2 class="text-xl">Directions</h2>
		<ol class="list-decimal text-lg">
			{#if $chosenRecipe}
				{#each $chosenRecipe.steps as step}
					<li>{step}</li>
				{/each}
			{/if}
		</ol>
	{/if}
</section>
