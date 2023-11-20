<script lang="ts">
    import {steps} from '$lib/stores/stores';
    import { X } from 'lucide-svelte';

    export let num: number;
    export let step: string;

    function deleteStep(){
        steps.update((map) => {
            map.delete(num);

            return map;
        })
    }
</script>

<li class="m-2 flex">
    {num + ". " + step}
    <button on:click={deleteStep} class="self-center text-gray-400 hover:text-gray-500 active:text-gray-600 ml-2">
        <X size={16}/>
    </button>
</li>