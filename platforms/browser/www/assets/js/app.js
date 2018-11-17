
var json;
var jsonString;
var cityActual;

$( document ).ready(function() {

    $.getJSON("http://www.solatravellers.com/events/jason.json", function(result) {

        json = result;
        jsonString=JSON.stringify(json);
        console.log(json);
        localStorage.setItem("json-event", jsonString);
        console.log(localStorage.getItem("json-event"));
    });

    var delay = 20000;
    var url = "home.html";
    var timeoutID = setTimeout(function() {
        window.location.href = url;
    }, delay);

});



function citys($city){

    $(".js-citys-div").hide();
    $(".js-events").show();
    $("#btn-back").show();

    //$(".js-events").empty();

    var cityActual = $city;
    console.log(cityActual);
    array = JSON.parse(localStorage.getItem("json-event"));
    console.log(array);

    $.each(array, function(i, field) {
        //console.log(field);
        $.each(field, function(i, dato) {
            if(cityActual==dato.city.name){
                var str = dato.date;
                var date = str.substr(0, 10);
                $(".js-events").append("<ul><li>"+dato.name+"</li><li>"+date+"</li><li>"+dato.description+"</li><ul>");

            }

        });
    });




}

function back(){
    $(".js-citys-div").show();
    $(".js-events").empty();
    $(".js-events").hide();


}