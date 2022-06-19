$("#search-button").on("click", function () {
  let city = $("#search-input").val();

  if (city != "") {
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric" +
        "&appid=8c99d99c3a606016624099458a32edcf",
      type: "get",
      dataType: "json",
      success: function (data) {
        let widget = cuaca(data);

        $("#cuaca").html(widget);
        $("#search-input").val("");
      },
    });
  } else {
    $("#error").html("wrong your mind");
  }
});

function cuaca(data) {
  return (
    "<h2>" +
    data.name +
    " ," +
    data.sys.country +
    "  </h2>" +
    "<h3><strong>Weather</strong>: " +
    data.weather[0].main +
    "</h3>" +
    "<h3><strong>Desciption</strong>: " +
    data.weather[0].description +
    "</h3>" +
    "<h3><strong>Temperatur</strong>: " +
    data.main.temp +
    "</h3>" +
    "<h3><strong>Pressure</strong>: " +
    data.main.pressure +
    "</h3>" +
    "<h3><strong>Humidity</strong>: " +
    data.main.humidity +
    "</h3>" +
    "<h3><strong>Min</strong>: " +
    data.main.temp_min +
    "</h3>" +
    "<h3><strong>Max</strong>: " +
    data.main.temp_max +
    "</h3>" +
    "<h3><strong>Wind Speed</strong>: " +
    data.wind.speed +
    "</h3>" +
    "<h3><strong>Wind Direction</strong>: " +
    data.wind.deg +
    "</h3>"
  );
}
