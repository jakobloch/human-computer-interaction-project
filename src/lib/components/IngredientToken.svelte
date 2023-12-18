<script lang="ts">
    import { X } from 'lucide-svelte';
    import {ingredients} from '$lib/stores/stores'
    export let ingredient: any;
    export let index: number;

    function deleteIngredient(){
        ingredients.update((arr) => {
            arr.splice(index, 1)

            return arr;
        })
    }
</script>

<div class="rounded-full border border-gray-500 flex p-2 m-2">
    {ingredient.amount + " " + ingredient.measurement + " " + ingredient.name}
    <button on:click={deleteIngredient} class="self-center text-gray-400 hover:text-gray-500 active:text-gray-600 ml-2">
        <X size={16}/>
    </button>
    
</div>