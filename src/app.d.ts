// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Ingredient{
		amount: string,
		measurement: string,
		name: string
	}

	interface Recipe{
		name: string,
		ingredients: Ingredient[],
		steps: string[]
	}

}

export {};
