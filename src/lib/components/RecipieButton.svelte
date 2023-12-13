<script lang="ts">
    export let name = ""
    export let recipie: any;

    import { createRadioGroup, melt } from '@melt-ui/svelte';
    import {chosenRecipie} from '$lib/stores/stores'

	const {
		elements: { root, item, hiddenInput },
		helpers: { isChecked }
	} = createRadioGroup({
		defaultValue: 'default'
	});

    function setRecipie() {
        chosenRecipie.set(recipie);
    }
</script>


<div class="flex items-center gap-3 ">
    <button
        use:melt={$item(name)}
        on:click={setRecipie}
        class="font-medium border border-black grow text-center mx-2 rounded-md p-2 cursor-pointer data-[state=checked]:bg-indigo-600 data-[state=checked]:text-white data-[state=checked]:ring-2 data-[state=checked]:ring-indigo-600 data-[state=checked]:border-white"
        id={name}
        aria-labelledby="{name}-label"
    >
    {name}
    </button>
    
</div>
