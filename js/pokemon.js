$("pokemon").mousedown(function() {
    var pokemon = $(this).attr("id");
    $("<div/>", {
        'class': "pokemon",
        text: "",
        'id': `${pokemon}_output`,
    }).appendTo('#pokemon')
    $.getJSON(`../JSON/${pokemon}.json`, function(char) {
        var name = char.name;
        var height = char.height;
        var base_experience = char.base_experience;
        var weight = char.weight;
        var types = char.types;
        var stats = char.stats;
        var abilities = char.abilities;
        var id = char.id;
        var is_default = char.is_default;
        var order = char.order;
        $(`#${pokemon}_output`).text(name);
    });
})