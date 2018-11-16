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

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);
