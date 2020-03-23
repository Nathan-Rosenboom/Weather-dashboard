// Key: 72644ffda4db761cb9639a8252b0bd0e
var cityQuery = $(this).attr("data-name ");
var APIKey = "72644ffda4db761cb9639a8252b0bd0e";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityQuery + "&units=metric&appid=" + APIKey;

    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        var cityLi = $("<li class=list-group-item>");

          // Storing the rating data
          var cityName = response.name;

          // Creating an element to have the rating displayed
          var nameDisp = $("<p>").text(cityName);

          // Displaying the rating
          cityLi.append(nameDisp);

      // Create CODE HERE to Log the queryURL
      console.log(queryURL);
      // Create CODE HERE to log the resulting object
      console.log(response);
      // Create CODE HERE to calculate the temperature (converted from Kelvin)
      // Create CODE HERE to transfer content to HTML
      $(".current-temp").text("Temperature: " + response.main.temp);
      $(".current-windspeed").text("Wind speed: " + response.wind.speed);
      $(".current-humidity").text("Humidity: " + response.main.humidity + "%");
      $(".city-name").text(response.name);
      // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
      // Create CODE HERE to dump the temperature content into HTML

    });
