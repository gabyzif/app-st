$( document ).ready(function() {
    $.getJSON("http://www.solatravellers.com/events/jason.json", function(result) {

        $.each(result, function(i, field) {
            //console.log(field);

            $.each(field, function(i, dato) {
                $("#output").append("<h1>"+dato.name+"</h1>");
                //$("#output").append(JSON.stringify(field, undefined, 2));
            });
        });

    });
});

var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

