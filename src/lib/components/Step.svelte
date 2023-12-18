<script lang="ts">
    import {steps} from "$lib/stores/stores"
	import { X } from "lucide-svelte";

	export let step: string;
	export let index: number;

    function deleteStep(){
        steps.update((arr) => {
            arr.splice(index, 1)

            return arr;
        })
    }
</script>

<li class="mx-2">
    {step}
    <button on:click={deleteStep} class="self-center text-gray-400 hover:text-gray-500 active:text-gray-600 ml-2">
        <X size={16}/>
    </button>
</li>
