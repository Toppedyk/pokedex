import { ProxyState } from "../AppState.js";
import {myPokemonsService} from "../Services/MyPokemonsService.js"


//Private
function _draw() {
  let template = ''
  ProxyState.myPokemon.forEach(p =>{
    template += `<li class="action hover-action border-top border-bottom" onclick="app.myPokemonsController.setActive('${p.id}')">${p.name}</li>`
  })
  document.getElementById('my-pokemon').innerHTML=template
}


//Public
export default class MyPokemonsController {
  constructor() {
    ProxyState.on("myPokemon", _draw);
    this.getAll();
  }

  async getAll(){
    try {
      myPokemonsService.getAll()
    } catch (error) {
      console.error(error)
    }
  }

  async addPokemon(){
    try {
      await myPokemonsService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  async remove(){
    await myPokemonsService.remove()
  }

  setActive(id){
    myPokemonsService.setActive(id)
  }




}
