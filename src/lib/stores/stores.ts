import { writable as persistentWritable } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store";


export const recipies = persistentWritable("recipies", new Map());
export const ingredient = writable({
    amount: "",
    measurement: "",
    name: ""
});
export const chosenRecipie = writable(["", {ingredients: [], steps:[]}]);