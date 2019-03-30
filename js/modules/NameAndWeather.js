System.register([], function (exports_1, context_1) {
    "use strict";
    var Name, WeatherLocation;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Name = /** @class */ (function () {
                function Name(first, second) {
                    this.first = first;
                    this.second = second;
                }
                Object.defineProperty(Name.prototype, "nameMessage", {
                    get: function () {
                        return "Hello " + this.first + " " + this.second;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Name;
            }());
            exports_1("Name", Name);
            WeatherLocation = /** @class */ (function () {
                function WeatherLocation(weather, city) {
                    this.weather = weather;
                    this.city = city;
                }
                Object.defineProperty(WeatherLocation.prototype, "weatherMessage", {
                    get: function () {
                        return "It is " + this.weather + " in " + this.city;
                    },
                    enumerable: true,
                    configurable: true
                });
                return WeatherLocation;
            }());
            exports_1("WeatherLocation", WeatherLocation);
        }
    };
});
