$("pokemon").mouseup(function() {
    // Remove the holer for the pokemon data so pokemon dont duplicate on click
    $('#pokemon').remove();
    // Add the pokemon div so I can actually make the pokemon
    $('body').append('<div id="pokemon"></div>');

    //* Get the pokemon id
    var pokemon = $(this).attr("id");

    $("<div/>", {
        'class': "pokemon_top",
        text: "",
        id: `${pokemon}_top`,
    }).appendTo('#pokemon');



    //* Create the image div and append to the pokemon
    $("<div/>", {
        'class': "pokemon_img",
        text: "",
        id: `${pokemon}_img`,
    }).appendTo('#pokemon');

    $("<div/>", {
        'class': "pokemon_body",
        text: "",
        id: `${pokemon}_body`,
    }).appendTo('#pokemon');

    //* Create the pokemon info div and append to pokemon
    $("<div/>", {
        'class': "pokemon_info",
        text: "",
        id: `${pokemon}_info`,
    }).appendTo('#pokemon');

    //* Create abilities div and appened to pokemon 
    $("<div/>", {
        'class': "pokemon_abilities",
        text: "Abilities: ",
        id: `${pokemon}_abilities`,
    }).appendTo('#pokemon');

    //* Create types div and append to pokemon
    $("<div/>", {
        'class': "pokemon_types",
        text: "Types: ",
        id: `${pokemon}_types`,
    }).appendTo('#pokemon');

    //* Create stats div and append to pokemon
    $("<div/>", {
        'class': "pokemon_stats",
        text: "",
        id: `${pokemon}_stats`,
    }).appendTo('#pokemon');

    //* Get the externa JSON file base on the pokemon you clicked
    $.getJSON(`JSON/${pokemon}.json`, function(char) {
        //* Set name of pokemon to equal name
        var name = char.name;

        //* Set imgurl of pokemon to equal the image url
        var img = char.img;

        //* Set heigth of pokemon to equal heigth
        var height = char.height;

        //* Set base_experience of pokemon to equal base_experience
        var base_experience = char.base_experience;

        //* Set weight of pokemon to equal weight
        var weight = char.weight;

        //* Set types of pokemon to equal (a list with objects) types
        var types = char.types;

        //* Set stats of pokemon to equal (a list with objects) stats
        var stats = char.stats;

        //* Set abilities of pokemon to equal (a list with objects) abilities
        var abilities = char.abilities;

        //* Set id of pokemon to equal id
        var id = char.id;

        //* Set is_default of pokemon to equal true
        var is_default = char.is_default;

        //* Set order of pokemon to equal order
        var order = char.order;

        // Add image to the pokemon_img div tag and add arc
        $("<img>", {
            src: img,
        }).appendTo(`#${pokemon}_img`);

        // For loop to get the individual abilities from the abilities list and add them to an element call pokemon_ability 
        for (var i = 0; i < abilities.length; i++) {

            // Add the ability to its own div then add to the pokemon_ability div tag
            document.getElementById(`${pokemon}_abilities`).innerHTML += `<article class="pokemon_ability" id="${pokemon}_ability${i}">${abilities[i].name}</article>`
        }

        // For loop to ge tthe individual types from the types variable and add them to the document
        for (typeofpokemon in types) {
            // Add the individual types to the pokemon_types div
            document.getElementById(`${pokemon}_types`).innerHTML += `<main class="pokemon_type" id="${pokemon}_type${typeofpokemon}">${types[typeofpokemon].type.name}</main>`
        }

        // For loop to get the individual stats and their info and add it to the pokemon
        for (statofpokemon in stats) {
            // Create a stat
            document.getElementById(`${pokemon}_stats`).innerHTML += `<article class="pokemon_stat" id="${pokemon}_stat${statofpokemon}"></article>`
                // Add the stat info to the stat
            document.getElementById(`${pokemon}_stat${statofpokemon}`).innerHTML += `<article class="pokemon_stat_info" id="${pokemon}_stat_info${statofpokemon}"></article>`
                // Add the name of the stat to the stat
            document.getElementById(`${pokemon}_stat${statofpokemon}`).innerHTML += `<article class="pokemon_stat_name" id="${pokemon}_stat_name${statofpokemon}">${stats[statofpokemon].stat.name}</article>`

            // Add the base stat of the stat to the stat info
            document.getElementById(`${pokemon}_stat_info${statofpokemon}`).innerHTML += `<article class="pokemon_stat_base" id="${pokemon}_stat_base${statofpokemon}">${stats[statofpokemon].base_stat}</article>`
                // Add the effort of the stat to the stat info
            document.getElementById(`${pokemon}_stat_info${statofpokemon}`).innerHTML += `<article class="pokemon_stat_effort" id="${pokemon}_stat_effort${statofpokemon}">${stats[statofpokemon].effort}</article>`
        }

        // Add the pokemons weight and heigth to the pokemon info
        document.getElementById(`${pokemon}_info`).innerHTML += `<article class="pokemon_weight" id="pokemon_weight">${weight}</article>`
        document.getElementById(`${pokemon}_info`).innerHTML += `<article class="pokemon_height" id="pokemon_height">${height}</article>`

        // Add the base experience of the pokemon into base_experience
        document.getElementById(`${pokemon}_top`).innerHTML += `<div class="pokemon_experience" id="${pokemon}_experience"><h3><small>lv.</small>${base_experience}</h3></div><div class="pokemon_name" id="${pokemon}_name"><h1>${name}</h1></div><div><h3>#00${id}</h3></div>`

    });
});