var current_page = 1;
var num_of_pages = 1;
var page_size = 3;
var results_array = null;

function procces_response(data) {
  $(".box1").children().remove();
  results_array = data;

  for (
    let i = 0 + (current_page - 1) * page_size; i < current_page * page_size; i++
  ) {
    
    $(".box1").append("<h4><span>" +(i + 1) +"# </span>" + "</h4>");
    $('.box1').append('<b>Title: </b><span>' + results_array.results[i].title+ '</span>');
    $(".box1").append("<p> <b>Description:</b> " + results_array.results[i].overview + "</p>");
    $(".box1").append("<img src=" +`http://image.tmdb.org/t/p/original/${results_array.results[i].poster_path}` +"></img></br>");
    $(".box1").append("<button class='backdrop' id='" + results_array.results[i].backdrop_path + "'>backdrop image!</button>");
    $(".box1").append("<hr>");
  }

  paginate_menu();
}

$(".button-bar").hide();
$("body").on("click", ".backdrop", function () {
  backdrop_id = $(this).attr("id");
  $(".box2").html(
    "<img src=" + `https://image.tmdb.org/t/p/w500/${backdrop_id}` + "></img"
  );
});

function paginate_menu() {
  $("#numbered-buttons-id").children().remove();
  var num_of_pages = Math.ceil(results_array.results.length / page_size);
  for (let i = 1; i <= num_of_pages; i++) {
    $("#numbered-buttons-id").append(
      `<button id="${i}" class="numbered-button page-button">${i}</button>`
    );
  }
}

$("#page_size").change(function () {
  page_size = $("#page_size").val();
  paginate_menu();
});

$("body").on("click", ".page-button", function () {
  $(".pre-next").show();
  switch (this.id) {
    case "first": current_page = 1;
      procces_response(results_array);
      break;
    case "last": current_page = $(".page-button").length - 4;
      procces_response(results_array);
      break;
    case "previous":
      if (current_page > 1) {
        current_page--;
        console.log(current_page);
        procces_response(results_array);
      }
      break;
    case "next":
      if (current_page < $(".page-button").length - 4) {
        current_page++;
        console.log(current_page);
        procces_response(results_array);
      }
      break;
    default:
      current_page = parseInt(this.id);
      console.log(current_page);
      procces_response(results_array);
  }
});


$("#movie-info").click(function () {
  search = $("#movies").val();
  $(".button-bar").show();
  $(".pre-next").hide();

  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${search}`,
    type: "GET",
    success: procces_response,
  });
});