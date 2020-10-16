$(function(){
  $("#nav-placeholder").load("nav.html");   //TODO: change the link to relative position, else might not load
  console.log("I got executed");
});

$(function () {
                $('#datetimepicker3').datetimepicker({
                    format: 'HH:mm'
                });
            });

$(function () {
                $('#datetimepicker4').datetimepicker({
                    format: 'HH:mm'
                });
            });


window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
  dataPointWidth: 20,
  zoomEnabeled: true,
	theme: "light2",
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "column",
    color: "#014D65",

      	indexLabelFontSize: 16,
		dataPoints: [
			{ y: 450, label: "Slot 1"},
			{ y: 414, label: "Slot 2"},
			{ y: 520, label: "Slot 3"},
			{ y: 460, label: "Slot 4" },
			{ y: 450, label: "Slot 5" },
			{ y: 500, label: "Slot 6" },
			{ y: 480, label: "Slot 7" },
			{ y: 480, label: "Slot 8" }
		]
	}]
});
chart.render();

}




$( "#submit4" ).click(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();

  var d1 =  $('#datetimepicker3').data("datetimepicker").viewDate();
  var d2 =  $('#datetimepicker4').data("datetimepicker");

  var diff = 0;

  if (d1 && d2) {
            diff = Math.floor((d2 - d1) / 86400000); // ms per day
      }

  //console.log(d1.isMoment());

 $.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/http://13.233.215.43:8765/marketplace/authority/slots",
    data: {
    	"userName" : localStorage.getItem("Uname"),
    	"slots" : "6"
    },
    dataType: "json",
    success: function(response){

      console.log(response);

    },
    error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                } 

  });
  
});


