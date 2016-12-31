var units = [
      {status:"assets/greenlight.png", serno:"17", batterylevel:"Low", coords:"27.4565, -80.3425"},
      {status:"assets/greenlight.png", serno:"24", batterylevel:"High", coords:"27.4565, -80.3025"},
      {status:"assets/redbutton.png", serno:"36", batterylevel:"Low", coords:"27.4565, -80.3925"}
    ];




var app = angular.module('myApp', ['ngRoute'])
                .config(function($routeProvider, $locationProvider){
                  $routeProvider
                    .when('/', {
                      templateUrl: 'templates/home.html',
                      controller: 'unitsCtrl'
                    })
                    .when('/unit/:id', {
                      templateUrl: 'templates/unit.html',
                      controller: 'unitDetailsCtrl'
                    })
                    .otherwise({
                      redirectTo: '/'
                    })

                })
                .controller('unitsCtrl', function($scope) {
                    $(".sidebarHeader").click(function(){
                        if(Status === 'open'){
                          $('.sidebar').addClass('nodisplay')    
                          Status = 'closed';
                        }else{
                          $('.sidebar').removeClass('nodisplay')
                          Status = 'open'
                        }
                    })


                    var units = [
                      {status:"assets/greenlight.png", serno:"17", batterylevel:"Low", coords:"27.4565, -80.3425", rightDoor:"closed", leftDoor:"closed"},
                      {status:"assets/greenlight.png", serno:"24", batterylevel:"High", coords:"27.4565, -80.3425", rightDoor:"closed", leftDoor:"closed"},
                      {status:"assets/redbutton.png", serno:"36", batterylevel:"Low", coords:"27.4565, -80.3425", rightDoor:"closed", leftDoor:"closed"}
                    ]

                    $scope.units = units;


                    $scope.findUnit = function(id){
                        console.log(id);
                    }

                    $scope.load = function () {
                      initialize();
                    }

                })
                .controller('unitDetailsCtrl', function($scope, $routeParams) {
                  var units = [
                      {msgNo:1, schedEvent:"Sched", dateAndTime:new Date().toGMTString(), leftDoor:"closed", rightDoor:"closed", lightStatus:"Dark", coords:"27.4565, -80.3425", batteryLevel: 'High', signalStrength: 100,  overallStatus: 'Good'},
                      {msgNo:2, schedEvent:"Sched", dateAndTime:new Date().toGMTString(), leftDoor:"closed", rightDoor:"closed", lightStatus:"Dark", coords:"27.4565, -80.3425", batteryLevel: 'High', signalStrength: 100, overallStatus: 'Good'},
                      {msgNo:3, schedEvent:"Sched", dateAndTime:new Date().toGMTString(), leftDoor:"closed", rightDoor:"closed", lightStatus:"Dark", coords:"27.4565, -80.3425", batteryLevel: 'Low', signalStrength: 100,  overallStatus: 'Breach'},
                      {msgNo:4, schedEvent:"Sched", dateAndTime:new Date().toGMTString(), leftDoor:"closed", rightDoor:"closed", lightStatus:"Dark", coords:"27.4565, -80.3425", batteryLevel: 'High', signalStrength: 100,  overallStatus: 'Good'},
                      {msgNo:5, schedEvent:"Sched", dateAndTime:new Date().toGMTString(), leftDoor:"closed", rightDoor:"closed", lightStatus:"Dark", coords:"27.4565, -80.3425", batteryLevel: 'High', signalStrength: 100, overallStatus: 'Good'},
                      {msgNo:6, schedEvent:"Sched", dateAndTime:new Date().toGMTString(), leftDoor:"closed", rightDoor:"closed", lightStatus:"Dark", coords:"27.4565, -80.3425", batteryLevel: 'Low', signalStrength: 100,  overallStatus: 'Breach'},
                    ]

                  $scope.units = units;

                  $scope.unitId = $routeParams.id;
                  $scope.msgTimeStamp = new Date().toGMTString();
                })





function initialize() {
        var mapOptions = {
          center: { lat:27.4565, lng:-80.5794},
          zoom: 5
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);



        for(i in units){
          var deviceCoords = units[i].coords.split(', ');
          
          deviceCoords[0] = Number(deviceCoords[0]);
          deviceCoords[1] = Number(deviceCoords[1]);


          addMarker(deviceCoords);

          function addMarker(location) {
    
            // Create new marker at event click location and inject into map
            var marker = new google.maps.Marker({
              position: {lat: deviceCoords[0], lng: deviceCoords[1]},
              map: map
            });


            // marker.id = uniqueId;
            // uniqueId++;
            // markers.push(marker); 

          }
        }

        // Pirates map setting/styling
        // map.set("styles", [{"featureType":"all","elementType":"all","stylers":[{"color":"#d4b78f"},{"visibility":"on"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#0d0000"},{"visibility":"on"},{"weight":1}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#98290e"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#98290e"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#d4b78f"},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"color":"#c4b17e"},{"visibility":"on"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#0d0000"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#d9be94"},{"visibility":"on"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#0d0000"},{"visibility":"off"},{"weight":2}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a8ac91"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#98290e"},{"visibility":"on"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}])
}
      


google.maps.event.addDomListener(window, 'load', initialize);



// function unitCategory(){
//   var unitCategory = document.getElementById('catFilters');


//   if(unitCategory.children[0].value == "Active"){

//     var secFilter = document.createElement('select');
//     secFilter.id = "secFilter";
//     var option1 = document.createElement('option');
//     var option2 = document.createElement('option');
//     option1.value = "unitCoords";
//     option2.value = "shipCoords";
//     option1.innerHTML = "Unit Coords";
//     option2.innerHTML = "Ship Coords";

//     secFilter.appendChild(option1);
//     secFilter.appendChild(option2);

//     unitCategory.appendChild(secFilter);
//   }else{
//     var secFilter = document.getElementById('secFilter');
//     if(secFilter){
//       unitCategory.removeChild(secFilter);
//     }
    
//   }

// }

// var deviceTypes = document.getElementById('catFilters').children[0];
// deviceTypes.addEventListener('change', unitCategory)




// window.addEventListener('load', unitCategory);










var View = 'map';
var Status = 'open';


$(document).on('ready', function() {


  
$("#view1").on('click', function(){
  if(View === 'list'){

    $(this).removeClass('off');
    $(this).addClass('on');
    
    $(".left-box").removeClass('col-md-12')
    $(".left-box").addClass('col-md-9')

    $(".sidebarHeader").show()
    $("#sideList").show()
    $("#map").show()
    $(".right-box").addClass('col-md-3')
    $(".sidebar").addClass('col-md-11');
    $(".sidebarHeader").addClass('col-md-1');
    $("#tbList").addClass('nodisplay')

    
    
    $("#view2").addClass('off');
    $("#view2").removeClass('on');

    View = 'map';
  }
});



$("#view2").on('click', function(){
  if(View === 'map'){

    $(this).removeClass('off');
    $(this).addClass('on');


    $(".left-box").removeClass('col-md-9');
    $(".right-box").removeClass('col-md-3');
    $(".sidebar").removeClass('col-md-11');
    $(".sidebarHeader").removeClass('col-md-1');


    $("#sideList").hide()
    $(".sidebarHeader").hide()
    $("#map").hide()
    $(".left-box").addClass('col-md-12')
    $("#tbList").removeClass('nodisplay')
    

    
    
    $("#view1").addClass('off');
    $("#view1").removeClass('on');

    View = 'list';
  }
});



$("table tr button").on("click", function(){
  confirm("By doing this action you could lose battery life")
})




});