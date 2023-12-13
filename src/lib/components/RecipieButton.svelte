<script lang="ts">
    export let name = ""
    export let recipie: any;
    export let item: any;

    import { createRadioGroup, melt } from '@melt-ui/svelte';
    import {chosenRecipie, recipies} from '$lib/stores/stores'
	import { Trash2 } from 'lucide-svelte';



    function setRecipie() {
        chosenRecipie.set(recipie);
    }
    function deleteRecipie() {
        recipies.update((map) => {
            map.delete(name);
			
            return map;
        })
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
    <button on:click={deleteRecipie} class="text-gray-300 hover:text-gray-400 active:text-gray-500">
        <Trash2 />
    </button>
</div>
