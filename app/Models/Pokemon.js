export default class Pokemon{
  constructor({name,img,weight,height,types, sprites,stats,id}){
    this.name = name
    this.weight = weight
    this.img = img || sprites.other.dream_world.front_default
    this.height = height
    this.types = types
    this.stats=stats
    this.id = id
  }

  get Template(){
    return `
<div class="card">
  <img src="${this.img}" class="card-img-top" alt="...">
  <div class="card-body bg-primary text-white">
    <h1 class="card-title">${this.name}</h1>
    <h4>${this.Types} Height: ${this.height} | Weight: ${this.weight}</h4>
  </div>
  ${this.Button}
</div>
    `
  }

  get Types(){
      let myTypes= ''
      this.types.forEach(t=>{myTypes += t.type.name + " | "})
      return `Types: ${myTypes}`
    
  }

  get Button(){
    if (this.stats){
    return `<button type="button" class="btn btn-success" onclick ="app.myPokemonsController.addPokemon()">Catch</button>`
    }else{
      return `<button type="button" class="btn btn-danger" onclick ="app.myPokemonsController.remove()">Release</button>`
    }

    }


  }

