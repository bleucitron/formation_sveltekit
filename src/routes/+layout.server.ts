import { fetchPokemons, fetchTotalPopulation } from '$lib/server/data';
import type { PokemonInBag } from '$lib/server/database/bag';

export async function load({ fetch, depends }) {
	depends('bag:all');

	return {
		pokemons: await fetchPokemons(),
		bag: await fetch('/bag/all')
			.then(resp => resp.json())
			.then(bag => bag as PokemonInBag[]),
		heavy: {
			population: fetchTotalPopulation(),
		},
	};
}
