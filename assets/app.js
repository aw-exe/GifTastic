    const anime = ["Cowboy Bebop", "Sailor Moon", "Pokémon", "Ghost in the Shell"];

    $(document).ready(function () {

        function createButtons() {
            $("#buttons-view").empty();
            for (let i = 0; i < anime.length; i++) {
                const newButton = $("<button>");
                newButton.addClass("animeGif-btn");
                newButton.attr("data-anime", anime[i]);
                newButton.text(anime[i]);
                $("#buttons-view").append(newButton);

            }
        }

        $("#add-gif").on("click", function (event) {
            event.preventDefault();
            const input = $("#gif-input").val().trim();
            anime.push(input);
            createButtons();
            return false;
        });

        $(document).on("click", "button", function () {
            $("#gifs-appear-here").empty();
            const anime = $(this).attr("data-anime");
            const queryURL = `https://api.giphy.com/v1/gifs/search?api_key=5mbxP8vtVpkXaz1OIUCSLAtrfOVnab7J&q=${anime}&limit=10&offset=0&rating=PG&lang=en`;

            $.ajax({
                    url: queryURL,
                    method: "GET"
                })

                .then(function (response) {
                    console.log(queryURL);
                    console.log(response);
                    const results = response.data;

                    for (let i = 0; i < results.length; i++) {
                        const animeDiv = $("<div>");
                        const p = $("<p>").text("Rating: " + results[i].rating);
                        const animeImage = $("<img>");
                        animeImage.attr("src", results[i].images.fixed_height.url);
                        animeDiv.append(p);
                        animeDiv.append(animeImage);
                        $("#gifs-appear-here").prepend(animeDiv);
                    }
                });
        });


        createButtons();


    });