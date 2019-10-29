const anime = ["Cowboy Bebop", "Sailor Moon", "Pokémon", "Ghost in the Shell"];

$("button").on("click", function() {
    const anime = $(this).attr("data-anime");
    const queryURL = `https://api.giphy.com/v1/gifs/search?q=${anime}&api_key=5mbxP8vtVpkXaz1OIUCSLAtrfOVnab7J=10`;
    
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

          // Creating a paragraph tag with the result item's rating
          const p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          const animeImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          animeImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          animeDiv.append(p);
          animeDiv.append(animalImage);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(animeDiv);
        }
      });
  });



