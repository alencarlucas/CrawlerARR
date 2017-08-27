(function () {

    function init() {
        $('#finddeviceresults').hide();
        $('#finddevicebutton').click(finddeviceSubmitButtonHandler);
    }

    function finddeviceSubmitButtonHandler (evt) {
        // prevent form submission
        evt.preventDefault();
        evt.stopPropagation();

        // find device data table container fade out
        $('#finddeviceresults').fadeOut();

        // delete find device data table row(s)
        var findDeviceTable = document.getElementById("finddevicetable");
        while(findDeviceTable.firstChild) {
            findDeviceTable.removeChild(findDeviceTable.firstChild);
        }

        // make the AJAX call after 1 second
        setTimeout(function(){
            $.ajax({
                url: '/finddevice',
                type: 'GET',
                dataType: 'json',
                success: getSuccessHandler,
                error: getErrorHandler
            });
        }, 1000);
    }

    function getSuccessHandler (jsonData) {
        // notify message on success
        $.notify("Find Device Successful", "success");

        // create row element to insert on device data table
        var row = new $.stringBuilder();
        row.cat("<tr class='odd'>")
        row.cat("<td style='text-align:center'>").cat(jsonData.id).cat("</td>");
        row.cat("<td style='text-align:center'>").cat(jsonData.timestamp).cat("</td>");
        row.cat("<td style='text-align:center'>").cat(jsonData.latitude).cat("</td>");
        row.cat("<td style='text-align:center'>").cat(jsonData.longitude).cat("</td>");
        row.cat("</tr>");

        // insert find device data table row(s)
        $('#finddevicetable').append(row.string());

        // insert geolocation history data on map
        var location = {};
        location.content = "<p><b>#" + jsonData.id + "</b></p>";
        location.lat = parseFloat(jsonData.latitude);
        location.lng = parseFloat(jsonData.longitude);

        var map = new GMaps({
          div: '#finddevicemap',
          lat: location.lat,
          lng: location.lng
        });

        map.addMarker({
            lat: location.lat,
            lng: location.lng,
            infoWindow: {
                content: location.content
            }
        });

        // find device data table container fade in
        $('#finddeviceresults').fadeIn();
    };

    // notify message on error
    function getErrorHandler() {
        $.notify("Find Device Failed", "error");
    };

    // string builder to manipulate html element(s)
    $.stringBuilder = function() {
        this.buffer = [];
    };
    $.stringBuilder.prototype = {
        cat: function(what) {
            this.buffer.push(what);
            return this;
        },
        string: function() {
            return this.buffer.join('');
        }
    };

    // init on document ready
    $(document).ready(init);

})();
