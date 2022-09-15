//daily planner
//current day displayed on open
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("today").textContent = currentDate;
//time variable
var time9 = moment().hour(9);
var time10 = moment().hour(10);
var time11 = moment().hour(11);
var time12 = moment().hour(12);
var time1 = moment().hour(13);
var time2 = moment().hour(14);
var time3 = moment().hour(15);
var time4 = moment().hour(16);
var time5 = moment().hour(17);
//scroll down to view time blocks
var hourBlock = [time9, time10, time11, time12, time13, time14, 
//time blocks are coded to change color for past, present, future
//able to enter event in each time block
$( ".selector" ).selectable({
    selected: function( event, ui ) {}
  });
//save time block

//save text in local storage
var saveText = function() {
    localStorage.setItem("text", JSON.stringify(text));
}

$( ".selector" ).on( "selectableselected", function( event, ui ) {} );

//on refresh, saved events persist 
