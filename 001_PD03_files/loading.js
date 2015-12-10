/* loading buttons */

/* buttons */

$(window).load(function(){

	$('input[value="Confirm"], input[value="Complete Application"], input[value="Next"], input[value="Search"], input[value="Select"], input[value="Submit Client"], input[value="Fast-Forward"], input[value="New Application"]').on("click", function() {   
		var n = $(this),
	            v = n.val(); 
	     n.val("Loading").addClass("disabled");
	    });
	
	/* link buttons */
	
	$('.btnSubmitAmendment a, #id_CCMS_GN04_include_page_gn04_include_page_gn04_header a').on("click", function() {
		var n = $(this),
	            t = n.text(); 
	            n.text("Loading").addClass("disabled");
	    });
});