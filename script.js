window.addEventListener("load", function() {
    let name = document.getElementById("pokeName");
    let ability1 = document.getElementById("ability1");
    let ability2 = document.getElementById("ability2");
    let type1 = document.getElementById("type1");
    let type2 = document.getElementById("type2");
    let img = document.getElementById("img");
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");

    let randomBtn = document.getElementById("randomBtn");
    randomBtn.addEventListener("click", getRandomPokemon);

    let swapPhoto = document.getElementById("swapPhoto");
    swapPhoto.addEventListener("click", changeImage);


    async function getRandomPokemon() {
        // Clear all fields before placing data
        name.innerHTML = "";
        ability1.innerHTML = "";
        ability2.innerHTML = "";
        type1.innerHTML = "";
        type2.innerHTML = "";
        height.innerHTML = "";
        weight.innerHTML = "";

        // generate a random number between 1 and 807 (the number of Pokémon in the Pokédex)
        let randomNum = Math.floor(Math.random() * 807) + 1;
        // fetch data for the randomly generated Pokémon
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`).then(function(response) {
            response.json().then(function(json) {
            // update the page with the new Pokémon's data
            img.setAttribute("src", json.sprites.front_default);
            name.innerHTML = json.name;
            ability1.innerHTML = json.abilities[0].ability.name;
            ability2.innerHTML = json.abilities[1].ability.name;
            type1.innerHTML = json.types[0].type.name;
            type2.innerHTML = json.types[1].type.name;
            height.innerHTML = json.height;
            weight.innerHTML = json.weight;
            });
        });
    }

    // still working on this portion of the code.
    function changeImage() {
        // toggle the image source between the front_default and front_shiny sprites
        if (img.getAttribute("src") === json.sprites.front_default) {
            img.setAttribute("src", json.sprites.front_shiny);
        } else {
            img.setAttribute("src", json.sprites.front_default);
        }
    }
});