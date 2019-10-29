const anime = ["Cowboy Bebop", "Sailor Moon", "Pokémon", "Ghost in the Shell"];

$("button").on("click", function() {
    const anime = $(this).attr("data-anime");
    const queryURL = `https://api.giphy.com/v1/gifs/search?api_key=5mbxP8vtVpkXaz1OIUCSLAtrfOVnab7J&q=${anime}&limit=10&offset=0&rating=PG&lang=en`;
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
      .then(function(response) {
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



