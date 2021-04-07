import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokemonApisService{
  async getAllPokemon(){
    let res = await pokeApi.get()
    ProxyState.allPokemon = res.data.results
    
  }

  async getPokemon(name){
    let res = await pokeApi.get(name)
    ProxyState.activePokemon = new Pokemon(res.data)
    console.log(ProxyState.activePokemon)
  }
}

export const pokemonApisService = new PokemonApisService();

