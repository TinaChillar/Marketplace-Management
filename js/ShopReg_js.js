
$(function(){
  $("#nav-placeholder").load("nav.html");  //TODO: change the link to relative position
  console.log("I got executeds")
});




$( "#submit3" ).click(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();

 

  var formData = {
  	  'shopName' : $('#shopName').val(),
    'licenseNumber':  $('#licenceNo').val(),
    
  }

  console.log(formData.shopName);
  


  $.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/http://18.224.1.190:8080/register/shop",
    headers: { "Authorization": "Bearer "+ localStorage.getItem("authToken")},
    data: formData,
    dataType: "json",
    success: function(response){
      console.log(response);

    },
    error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                } 

  });
  
});