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
            const anime = $("#gif-input").val().trim();
            anime.push(animeDiv);
            createButton();
            return false;
        });

        $("button").on("click", function () {
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
                        // animeDiv.addClass("animeDiv img-thumbnail grid-item");
                        // animeDiv.attr("src", response.data[i].images.fixed_width_still.url);
                        // animeDiv.attr("data-state", "still");
                        // animeDiv.attr("data-still", response.data[i].images.fixed_height.url);
                        // animeDiv.attr("data-animate", response.data[i].images.fixed_height.url);
                        $("#gifs-appear-here").prepend(animeDiv);
                    }
                });
        });

        $("#gifs-appear-here").on("click", function() {
            
            const state = $(this).attr("data-state");
        
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });


    });