<script lang="ts">
    export let ingredient: any;

</script>

<div class="rounded-full border border-gray-500 flex p-2 m-2">
    {ingredient.amount + " " + ingredient.measurement + " " + ingredient.name}
</div>