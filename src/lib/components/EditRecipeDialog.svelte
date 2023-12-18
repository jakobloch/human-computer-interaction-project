<script lang="ts">
	import { createDialog, melt, type CreateDialogProps } from '@melt-ui/svelte';
	import { PlusSquare, X, Settings } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	import TextInput from '$lib/components/TextInput.svelte';
	import { recipes, ingredient, ingredients, steps } from '$lib/stores/stores';
	import IngredientToken from './IngredientToken.svelte';
	import Step from './Step.svelte';

	export let chosenRecipe: Recipe;
	let step = '';
	let name = '';

	const handleOpen: CreateDialogProps['onOpenChange'] = ({ next }) => {
		if ($open) {
			clearRecipe();
		} else if (!$open) {
			name = chosenRecipe.name;
			ingredients.set(chosenRecipe.ingredients);
			steps.set(chosenRecipe.steps);
		}
		return next;
	};

	const {
		elements: { trigger, portalled, overlay, content, title, description, close },
		states: { open }
	} = createDialog({
		onOpenChange: handleOpen
	});

	function addIngredient() {
		ingredients.update((arr) => {
			arr.push($ingredient);
			return arr;
		});
		$ingredient = {
			amount: '',
			measurement: '',
			name: ''
		};
	}
	function addStep() {
		steps.update((arr) => {
			arr.push(step);
			step = '';

			return arr;
		});
	}
	function saveRecipe() {
		recipes.update((map) => {
			if (map.has(name)) {
				map.set(name, { name: name, ingredients: $ingredients, steps: $steps });
			} 

			return map;
		});
		clearRecipe();
	}
	function clearRecipe() {
		ingredients.update((arr) => {
			arr = [];
			return arr;
		});
		steps.update((arr) => {
			arr = [];
			return arr;
		});
		name = '';
	}
</script>

<button use:melt={$trigger} type="button" class=" text-center hover:border-gray-400 text-gray-300 hover:text-gray-400 active:text-gray-500 active:border-gray-500">
	<Settings />
</button>

<div use:portalled class="">
	{#if $open}
		<div use:melt={$overlay} class="fixed inset-0 z-50 bg-black/50" transition:fade={{ duration: 150 }} />
		<div
			class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
            max-w-[550px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white
            p-6 shadow-lg overflow-scroll"
			transition:fly={{
				duration: 150
			}}
			use:melt={$content}
		>
			<h2 use:melt={$title} class="m-0 text-lg font-medium text-black">Edit Recipe</h2>

			<fieldset class="mb-4 flex items-center gap-5">
				<label class="w-[120px] text-right text-black" for="name">Recipe Name </label>
				<input
					bind:value={name}
					class="inline-flex h-8 w-full flex-1 items-center justify-center
                    rounded-sm border border-solid px-3 leading-none text-black"
					id="recipeName"
					readonly
				/>
			</fieldset>
			<h3 class="w-[120px] text-right text-black">Ingredients</h3>
			<fieldset class="mb-4 flex items-center gap-5">
				<TextInput />

				<button on:click={addIngredient}>
					<PlusSquare />
				</button>
			</fieldset>
			<div class="flex">
				{#each $ingredients as ingredient, index}
					<IngredientToken {ingredient} {index} />
				{/each}
			</div>
			<h3 class="w-[120px] text-right text-black">Steps</h3>
			<div class="flex justify-between">
				<div class="relative border border-gray-300 rounded-lg my-4 w-3/4">
					<input bind:value={step} type="text" id="step" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
					<label for="step" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Instructions</label>
				</div>
				<button on:click={addStep}>
					<PlusSquare />
				</button>
			</div>

			<ol class="list-decimal">
				{#each $steps as step, index}
					<Step {step} {index} />
				{/each}
			</ol>

			<div class="mt-6 flex justify-end gap-4">
				<button
					on:click={clearRecipe}
					use:melt={$close}
					class="inline-flex h-8 items-center justify-center rounded-sm
                    bg-zinc-100 px-4 font-medium leading-none text-zinc-600"
				>
					Cancel
				</button>
				<button
					use:melt={$close}
					on:click={saveRecipe}
					class="inline-flex h-8 items-center justify-center rounded-sm
                    bg-magnum-100 px-4 font-medium leading-none text-magnum-900"
				>
					Save
				</button>
			</div>
			<button
				use:melt={$close}
				aria-label="close"
				class="absolute right-4 top-4 inline-flex h-6 w-6 appearance-none
                items-center justify-center rounded-full p-1 text-magnum-800
                hover:bg-magnum-100 focus:shadow-magnum-400"
			>
				<X class="square-4" />
			</button>
		</div>
	{/if}
</div>
