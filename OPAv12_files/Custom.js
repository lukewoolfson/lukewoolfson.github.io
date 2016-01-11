$(document).ready(function(){
   $('label:contains("HideMe")').parent().parent().hide();
     $( "#scrollouthelp" ).hide();
});
function ScrollOut() {
     $( "#scrollouthelp" ).slideToggle("slow");};