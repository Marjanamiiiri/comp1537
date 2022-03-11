function procces_(data){
    console.log(data)
    $('#city_temperature').html(data.main.temp)
    $('#p2').html(data.weather[0].description)
    x = data.weather[0].icon
    $("#img1").attr('src', `http://openweathermap.org/img/wn/${x}@2x.png`)

}

function AJAX_GET(){
    y = $("#city_name_input").val()
    $.ajax(
      {
        'url':`https://api.openweathermap.org/data/2.5/weather?q=${y}&appid=d41c30828ed2511802bcfaa195efe028&units=metric`,
        type:'GET',
        success: procces_
      }
    )
  }

  function setup(){
    $('#get_temperature_button').click(AJAX_GET);
  }

$(document).ready(setup);