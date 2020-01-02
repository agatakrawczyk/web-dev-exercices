var movies = [{
    title: "Breave Heart",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Dancing in the darkness",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Only lovers left alive",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Paterson",
    rating: 4.5,
    hasWatched: false
  }
]

function buildString(movie) {
  var result = "You have ";
  if (movie.hasWatched == true) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\"" + " - ";
  result += movie.rating + " stars";
  return result
}

movies.forEach(function(movie) {
  console.log(buildString(movie));
});
