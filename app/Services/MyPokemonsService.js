import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./AxiosService.js"

class MyPokemonsService{
  async getAll(){
    let res = await sandboxApi.get()
    ProxyState.myPokemon = res.data.map(p => new Pokemon(p))
  }

  async addPokemon(){
    let res = await sandboxApi.post('', ProxyState.activePokemon)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
  }

  async remove(){
    await sandboxApi.delete(ProxyState.activePokemon.id)
    ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id != ProxyState.activePokemon.id)
    ProxyState.activePokemon = null
  }

  setActive(id){
    let pokemon = ProxyState.myPokemon.find(p => p.id === id)
    console.log(pokemon)
    ProxyState.activePokemon = pokemon
  }

}

export const myPokemonsService = new MyPokemonsService();