<script lang="ts">
    import { X } from 'lucide-svelte';
    import {ingredients} from '$lib/stores/stores'
    export let ingredient: any;

    function deleteIngredient(){
        ingredients.update((set) => {
            set.delete(ingredient)

            return set;
        })
    }
</script>

<div class="rounded-full border border-gray-500 flex p-2 m-2">
    {ingredient.amount + " " + ingredient.measurement + " " + ingredient.name}
    <button on:click={deleteIngredient} class="self-center text-gray-400 hover:text-gray-500 active:text-gray-600 ml-2">
        <X size={16}/>
    </button>
    
</div>