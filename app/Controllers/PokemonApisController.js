import { ProxyState } from "../AppState.js";
import {pokemonApisService} from "../Services/PokemonApisService.js"


//Private
function _draw() {
  let template = ''
  ProxyState.allPokemon.forEach(p =>{
    template += `<li class="action hover-action border-top border-bottom" onclick="app.pokemonApisController.getPokemon('${p.name}')">${p.name}</li>`
  })
  document.getElementById('all-pokemon').innerHTML=template
}

function _drawActive(){
  document.getElementById('active-pokemon').innerHTML =  ProxyState.activePokemon ? ProxyState.activePokemon.Template : `<p>NO POKEMON SELECTED</p>`
}

//Public
export default class PokemonApisController {
  constructor() {
    ProxyState.on("allPokemon", _draw);
    ProxyState.on("activePokemon", _drawActive);
    this.getAllPokemon()
  }

  async getAllPokemon(){
    try {
      await pokemonApisService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  async getPokemon(name){
    try {
      await pokemonApisService.getPokemon(name)
    } catch (error) {
      console.error(error)
    }
  }


}
