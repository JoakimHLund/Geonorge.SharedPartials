﻿(function() {
    var app = angular.module("geonorge-header");

    app.controller("baseController", [
        "$scope", "$http",
        function($scope, $http) {            
            $scope.langCode = $.cookie("_culture");

            $scope.localizedText = {
                search: {
                    en: "Search",
                    no: "Søk"
                },
                menu: {
                    en: "Menu",
                    no: "Meny"
                },
                login: {
                    en: "Login",
                    no: "Logg inn"
                }
            }

            switch ($scope.langCode) {
                case "en":
                    $scope.cultureSwitchName = "Norsk";
                    $scope.cultureSwitchCode = "no";
                    if (cultureData)
                        $scope.cultureSwitchUrl = cultureData.friendlyUrlNO;
                    break;
                default:
                    $scope.cultureSwitchName = "English";
                    $scope.cultureSwitchCode = "en";
                    if (cultureData)
                        $scope.cultureSwitchUrl = cultureData.friendlyUrlEN;
            }

            $scope.switchCulture = function(cultureCode) {
                document.cookie = "_culture=" + cultureCode + "; path=/;domain=.geonorge.no";
            }
            
            $scope.imageLogoPath = "";
            if (searchOption.imageLogoPath !== undefined)
                $scope.imageLogoPath = searchOption.imageLogoPath;
        }
    ]);
}());