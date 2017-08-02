$.ajax({
    url: 'http://api.wunderground.com/api/2edcb79cf22ddc57/conditions/q/autoip.json',
    dataType: 'json',
    success: function(data){
        var loc = data.current_observation.display_location.full
        var temp = data.current_observation.temperature_string
        var condit = data.current_observation.weather
        console.log(condit)
      console.log(data.current_observation)
      $('h2').append(loc);
      $('h3').append("Temperature: "+temp);
      $('h4').append("Condition: "+condit);
    }
})

