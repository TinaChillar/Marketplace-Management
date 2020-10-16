
$(function(){
  $("#nav-placeholder").load("nav.html");  //TODO: change the link to relative position
  console.log("I got executeds")
});




$( "#submit3" ).click(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();
  var myArray = [];
  $("input:checkbox[name=categories]:checked").each(function(){
    myArray.push($(this).val());
});

var str2=[];
str2.push($('#latitude').val());
str2.push($('#longitude').val());
var str3 = ["s202", "s201"];
  

  var formData = {
  	  'shopName' : $('#shopName').val(),
    'licenseNumber':  $('#licenceNo').val(),
     'address' : $('#shopAddress').val(),
    'city' : $('#city').val(),
    'state' : $('#state').val(),
    'zip': $('#zipCode').val(),


    'qlen': $('#queueLength').val(),
     'firstNameShopkeeper' : $('#shopOwnerFirstName').val(),
    'lastNameShopkeeper': $('#shopOwnerLastName').val(),
    
    'usernameShopkeeper': $('#shopOwnerUsername').val(),
    'emailShopkeeper': $('#shopOwnerEmail').val(),
    
    'phoneNoShopkeeper': $('#shopOwnerMobile').val(),
    'categories': myArray.toString(),
    'shopids': str3.toString(),
    'location': str2.toString()
 };

 console.log(formData.shopName);
 console.log(typeof(formData.categories));
 console.log(formData.location);
  
  
$.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/http://13.233.215.43:8765/marketplace/register/shop",
    headers: { "Authorization": 'Bearer '+ localStorage.getItem("authToken")},
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