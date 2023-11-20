<script>
    import {chosenRecipie } from '$lib/stores/stores'
    import Step from './Step.svelte';
    console.log($chosenRecipie[1])
    
</script>

<h1 class="text-4xl font-bold">{$chosenRecipie[0]}</h1>

<div class="flex flex-col items-start">
    {#if $chosenRecipie[0] != ""}
    <h3 class="text-2xl m-2">Ingredients</h3>
    <ul class="list-disc text-lg list-inside indent-8">
        {#each $chosenRecipie[1].ingredients as ingredient}
            <li class="m-2">{ingredient.amount + " " + ingredient.measurement + " " + ingredient.name}</li>
        {/each}
    </ul>
    <h3 class="text-2xl m-2">Steps</h3>
    <ol class="text-lg list-inside indent-8">
        {#each $chosenRecipie[1].steps as step}
            <Step num={step[0]} step={step[1]} />
        {/each}
    </ol>
    {/if}
</div>

