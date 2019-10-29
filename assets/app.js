const anime = ["Cowboy Bebop", "Sailor Moon", "Pokemon", "Spirited Away" ];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayAnimeGif() {

    const anime = $(this).attr("data-anime");
    const queryURL = `https://api.giphy.com/v1/gifs/search?q=${anime}&api_key=5mbxP8vtVpkXaz1OIUCSLAtrfOVnab7J=10`;
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Creating a div to hold the movie
        const movieDiv = $("<div class='movie'>");

        // Storing the rating data
        const rating = response.Rated;

        // Creating an element to have the rating displayed
        const pOne = $("<p>").text("Rating: " + rating);

        // Displaying the rating
        movieDiv.append(pOne);

    
        // Putting the entire movie above the previous movies
        $("#movies-view").prepend(movieDiv);
    });

}

// Function for displaying movie data
function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (let i = 0; i < movies.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        const a = $("<button>");
        // Adding a class of movie-btn to our button
        a.addClass("movie-btn");
        // Adding a data-attribute
        a.attr("data-name", movies[i]);
        // Providing the initial button text
        a.text(movies[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

// This function handles events where a movie button is clicked
$("#add-movie").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    const movie = $("#movie-input").val().trim();

    // Adding movie from the textbox to our array
    movies.push(movie);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();
</script>