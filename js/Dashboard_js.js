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
	theme: "light2",
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",
      	indexLabelFontSize: 16,
		dataPoints: [
			{ y: 450 },
			{ y: 414},
			{ y: 520},
			{ y: 460 },
			{ y: 450 },
			{ y: 500 },
			{ y: 480 },
			{ y: 480 },
			{ y: 410 },
			{ y: 500 },
			{ y: 480 },
			{ y: 510 }
		]
	}]
});
chart.render();

}

//document.getElementById("uname").innerHTML = "Hello, " + localStorage.getItem("Uname");


$( "#submit4" ).click(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();

  var d1 =  $('#datetimepicker3').data("datetimepicker").viewDate();
  var d2 =  $('#datetimepicker4').data("datetimepicker");

  var diff = 0;

  if (d1 && d2) {
            diff = Math.floor((d2 - d1) / 86400000); // ms per day
      }

  console.log(d1.isMoment());

 $.ajax({
    type: "POST",
    url: "http://18.219.140.201:9000/authority/slots",
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


