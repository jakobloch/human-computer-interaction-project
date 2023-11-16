<script>
    import {chosenRecipie } from '$lib/stores/stores'
</script>

<h1>{$chosenRecipie[0]}</h1>
<ul class="list-disc">
    {#each $chosenRecipie[1].ingredients as ingredient}
        <li>{ingredient.amount + " " + ingredient.measurement + " " + ingredient.name}</li>
    {/each}
</ul>
<ol class="list-decimal">
    {#each $chosenRecipie[1].steps as step}
        <li>{step}</li>
    {/each}
</ol>
