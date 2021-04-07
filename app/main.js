import PokemonApisController from "./Controllers/PokemonApisController.js";
import MyPokemonsController from "./Controllers/MyPokemonsController.js"
class App {
  pokemonApisController = new PokemonApisController();

  myPokemonsController = new MyPokemonsController()
}

window["app"] = new App();
