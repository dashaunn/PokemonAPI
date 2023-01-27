window.addEventListener("load", function() {
    let id = this.document.getElementById("id");
    let name = document.getElementById("pokeName");
    let img = document.getElementById("img");
    let type = document.getElementById("type");
    let move1 = document.getElementById("move1");
    let move2 = document.getElementById("move2");
    let move3 = document.getElementById("move3");
    let xp = document.getElementById("xp");
    let height = this.document.getElementById("height");
    let weight = this.document.getElementById("weight");

    let randomBtn = document.getElementById("randomBtn");
    randomBtn.addEventListener("click", getRandomPokemon);

    let swapPhoto = document.getElementById("swapPhoto");
    swapPhoto.addEventListener("click", changeImage);


    async function getRandomPokemon() {


        // generate a random number between 1 and 807 (the number of Pokémon in the Pokédex)
        let randomNum = Math.floor(Math.random() * 807) + 1;
        // fetch data for the randomly generated Pokémon
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`).then(function(response) {
            response.json().then(function(json) {
            // update the page with the new Pokémon's data
            id.innerHTML = json.id;
            name.innerHTML = json.name;
            img.setAttribute("src", json.sprites.front_default);
            type.innerHTML = json.types[0].type.name;
            move1.innerHTML = json.moves[0].move.name;
            move2.innerHTML = json.moves[1].move.name;
            move3.innerHTML = json.moves[2].move.name;
            xp.innerHTML = json.base_experience;
            height.innerHTML = json.height;
            //The API
            let decimeters = json.height;
            let meters = decimeters * 0.1;
            let feet = meters * 3.2808;
            let totalInches = feet * 12;
            let inches = Math.round(totalInches % 12);
            let floorFeet = Math.floor(totalInches/12);
            height.innerHTML = floorFeet + "' " + inches + '"';
            weight.innerHTML = json.weight;
            let kilograms = json.weight;
            let pounds = Math.round(kilograms/4.5359237);
            weight.innerHTML = pounds + " lbs";
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