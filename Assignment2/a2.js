current_page_id = 1;
number_of_pages = 1;
page_size = 3;
results_array = null;



function display(page_id, page_size){
    start_index = page_size * (page_id - 1)
    stop_index = page_size * (page_id - 1)
    for (i = start_index ; i < stop_index; i++)
    $("#results").html(`<h1> display (${page_id}, ${page_size})</h1>`)
}
function paginate_menu(){
    number_of_pages = Math.ceil(results_array.results.length / page_size);
    $("#first").show();
    $("#last").show();
    $("#numbered_buttons_id").empty();
    for(i = 1 ; i <=  number_of_pages ; i++){
        x = `<button id="${i}" class="numbered_buttons"> ${i}</button> `;
        $("#numbered_buttons_id").append(x)
    }
    
}
function procces_response(data){
    // number_of_pages = Math.ceil(data.results.length / page_size);
    results_array = data;
    for(i = 1; i < data.results.length ; i++){
        $('#results').append(i+0 + '<i>#<i>' + "<br>")
        $('#results').append('<b>Title<b>: ' + data.results[i].original_title + '</br>' );
        $('#results').append('Description: ' + data.results[i].overview + '</br>'+ '</br>');
        x = data.results[i].poster_path

        image_box = `<img src='https://image.tmdb.org/t/p/w500/${x}' width="100"%>`
        $('#results').append(image_box +'</br>');
        z = `<button id="${data.results[i].backdrop_path} "class="backdrop_button"> backdrop image!</button>`
        $("#results").append(z + "<br>"+ "<hr>");
    }
   

    paginate_menu();
    
}
function call_ajax(){
    w = $('#movie_name').val();
    $.ajax({
        'url': `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&query=${w}`,
        'type': 'GET',
        'success': procces_response
    })
    $("header").show();
}
function display_back_drop() {
    w = $(this).attr("id");
    console.log('display called')
    console.log(`<img src="https://image.tmdb.org/t/p/original${w}" width="100%">`);
    $("#right_div").html(`<img src="https://image.tmdb.org/t/p/original${w} " width="100%">`)


}
function header_button(){
    w = $(this).attr("id");
    $("#results").html(`<h1> display (${w}, ${page_size})</h1>`)
    current_page_id = Number(w);

    display(number_of_pages, page_size);
    call_ajax();
    $("#next").show();
    $("#prv").show();

}
function first(){
    $("#results").html(`<h1> display (1, ${page_size})</h1>`)
    current_page_id = 1;
    $("#next").show();
    $("#prv").show();
    display(1, page_size);
    display(number_of_pages, page_size);
    
}
function last(){

    $("#results").html(`<h1> display (7, ${page_size})</h1>`)
    current_page_id = 7;
    $("#next").show();
    $("#prv").show();
    display(7, page_size);
    display(number_of_pages, page_size);
}
function prev(){
    if(current_page_id > 1)
        current_page_id--;
    $("#results").html(`<h1> display (${current_page_id},  ${page_size}) </h1>`);
    display(current_page_id, page_size);
}

function next(){
    if(current_page_id < 7)
        current_page_id++;
    $("#results").html(`<h1> display (${current_page_id},  ${page_size}) </h1>`);
    
    display(current_page_id, page_size);
}
function drop_down_menu_changed(){
    page_size = $(this).val();
    page_size = Number(page_size);
    paginate_menu()
}
function setup(){
    console.log("test")
    $('#movie_info').click(call_ajax);
    $('body').on('click', '.backdrop_button' ,display_back_drop);
    $("body").on("click",".numbered_buttons",header_button);
    $("#first").click(first)
    $("#last").click(last)
    $("#next").click(next);
    $("#prv").click(prev);
    $("#next").hide();
    $("#prv").hide();
    $("#first").hide();
    $("#last").hide();
    // $("header").hide();
    $("select").change(drop_down_menu_changed);
    page_size = Number($("option:selected").val())
    $('select').display(current_page_id, page_size)

}
$(document).ready(setup)