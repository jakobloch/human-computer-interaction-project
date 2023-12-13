<script>
    import {chosenRecipie } from '$lib/stores/stores'
</script>
<section class="flex flex-col items-center">
    <h1 class="text-3xl">{$chosenRecipie[0]}</h1>
    <h2 class="text-xl">Ingredients</h2>
    <ul class="list-disc text-lg">
        {#each $chosenRecipie[1].ingredients as ingredient}
            <li>{ingredient.amount + " " + ingredient.measurement + " " + ingredient.name}</li>
        {/each}
    </ul>

    <h2 class="text-xl">Directions</h2>
    <ol class="list-decimal text-lg">
        {#each $chosenRecipie[1].steps as step}
            <li>{step}</li>
        {/each}
    </ol>
</section>

