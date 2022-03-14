var elList = document.querySelector(".list");

for (var pokemon of pokemons){
  var elItem = document.createElement("li");
  var elImg = document.createElement("img");
  var elTitle = document.createElement("h3");
  var elText = document.createElement("p");
  
  elTitle.textContent = pokemon.name;
  elText.textContent = pokemon.candy;
  
  elItem.setAttribute("class" , "list-unstyled m-3 bg-gradient border border-2 rounded-3");
  elImg.setAttribute("class" , "d-block m-0 m-auto");
  elImg.setAttribute("src" , pokemon.img);
  elTitle.setAttribute("class" , "h3 text-center");
  elText.setAttribute("class" , "text-center");
  
  elList.appendChild(elItem);
  elItem.appendChild(elImg);
  elItem.appendChild(elTitle);
  elItem.appendChild(elText);
}