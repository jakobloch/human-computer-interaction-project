import { writable as persistentWritable } from "@macfja/svelte-persistent-store"
import { derived, writable } from "svelte/store";



export const ingredients = writable(new Array<Ingredient>);
export const steps = writable(new Array<string>);
export const ingredient = writable<Ingredient>({
    amount: "",
    measurement: "",
    name:""
});

export const recipes = persistentWritable("recipes", new Map<string, Recipe>());
export const activeName = writable<string>();

export const chosenRecipe = derived(
    [activeName, recipes],
    ([$activeName, $recipes]) => {
        return $recipes.get($activeName);
    }
);