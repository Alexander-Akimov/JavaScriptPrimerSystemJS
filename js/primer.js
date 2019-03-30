System.register(["modules/NameAndWeather"], function (exports_1, context_1) {
    "use strict";
    var NameAndWeather_1, name, loc;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NameAndWeather_1_1) {
                NameAndWeather_1 = NameAndWeather_1_1;
            }
        ],
        execute: function () {
            name = new NameAndWeather_1.Name("Adam", "Freeman");
            console.log(name.nameMessage);
            loc = new NameAndWeather_1.WeatherLocation("raining", "London");
            console.log(loc.weatherMessage);
        }
    };
});
