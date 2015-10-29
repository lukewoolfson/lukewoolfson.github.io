function doBlurEvent( theElement )
{
    var theParent = theElement.parentNode;
    if (theElement.value == "" && document.getElementById(theElement.name + "_error") == null)
    {
        var oDiv=document.createElement("DIV");
        oDiv.setAttribute("id", theElement.name + "_error");
        oDiv.setAttribute("class", "errorText");
        oDiv.innerHTML = "Please complete this box";
        theParent.appendChild(oDiv);
    }
    else if (theElement.value != "" && document.getElementById(theElement.name + "_error") != null)
    {
        try
        {
            var err = document.getElementById(theElement.name + "_error");
            theParent.removeChild(err);
        }
        catch (e)
        {}
    }
}

function doChangeEvent( theElement )
{
}

function doClickEvent( theElement )
{
}

function doFocusEvent( theElement )
{
}

function popupHelp(url){
	var helpWindow=window.open(url,"help","height=300,width=420,location=no,toolbar=no,titlebar=no,directories=no,status=no,menubar=0,scrollbars=yes,resizable=yes");
	if (window.focus) {helpWindow.focus()}
	return false;
}

/*
 * Limits the text entry to size specified Parameters: field : The field. event :
 * the event size : The size limit
 */
function stopTyping(field, event, size)
{
    var txt = field.value;
    var re = /\r\n/g
    txt = txt.replace(re, "\n");
       if(txt.length >= size)
     {
        /*
		 * left arrow 37 up arrow 38 right arrow 39 down arrow 40 delete 46
		 * backspace 8
		 */
        // check for the shift key as well
        // This is required as in IE SHIFT+% will return a code of 37...
        if(event.shiftKey)
        {
            return false;
        }
        else
        {
            if (event.keyCode != 8 && event.keyCode != 46
                && event.keyCode != 38 && event.keyCode != 39
                && event.keyCode != 40 && event.keyCode != 37)
                {
                    return false;
                }
        }
    }
}

/*
 * Limits the text entry to size specified Parameters: field : The field. event :
 * the event size : The size limit
 */
function updateCount(field, event, size)
{
	var txt = field.value;
    var re = /\r\n/g
    txt = txt.replace(re, "\n");
	
	var counter = document.getElementById(field.id + '_count');
	counter.innerHTML = txt.length + ' / ' + size;
	if (field.value.length > size)
	{
		counter.style = 'color:red;font-weight:bold';
	}
	else
	{
		counter.style = '';
	}
}

function createPrintLink(parentElementId, linkText)
{
	var parentElement = document.getElementById(parentElementId);
	var printLink = document.createElement("a");
	// IE bug, it ignores the setAttribute onclick
	if(printLink.attachEvent)
	{
		printLink.attachEvent("onclick", printWindow);
	}
	printLink.setAttribute("href","javascript: void(null)");
	printLink.setAttribute("onclick", "javascript: window.print()");
	printLink.appendChild(document.createTextNode(linkText));
	parentElement.appendChild(printLink);


}

function printWindow()
{
	window.print();
}

/**
 * Duplicate post prevention.
 */
(function(){
	
	// Flag indicating whether a submission has been made yet.
	var submitted = false;
	
	/**
	 * Function that handles a submission attempt.
	 */
	function submitHandler(event){
		event = event || window.event;
		if(submitted){
			if (event.preventDefault) {
				event.preventDefault();
			}
			event.cancelBubble = true;
			return false;
		}
		submitted = true;
	}
	
	/**
	 * Adds submission handlers to all forms on the page.
	 */
	function attachSubmissionHandlers(){
		var forms = document.getElementsByTagName("form");
		for(var index=0; index<forms.length; index++){
			var form = forms[index];
			addEventListener(form,"submit",submitHandler);
		}
	}
	
	/**
	 * Adds a listener for a type of event on the supplied object.
	 * 
	 * @param object
	 *            The object that fires the event.
	 * @param event
	 *            The name of the event type (e.g. "load")
	 * @param callback
	 *            The function to be called when the event is fired.
	 */
	function addEventListener(object,event,callback){
		if (object.addEventListener) 
        {
            object.addEventListener(event,callback,false);
        }
        else if(object.attachEvent) 
        {
            object.attachEvent("on"+event,callback);
        }
	}
	
	/**
	 * Adds character counter to text areas.
	 */
	function addTextAreaMaxLength(){
		var textareas = document.getElementsByTagName("textarea");
		for(var index=0; index<textareas.length; index++){
			var textarea = textareas[index];
			var counter = document.createElement("div");
			counter.setAttribute("id", textarea.id + '_count');
			
			var tmpFn = window.stopTyping;
			window.stopTyping = function(a,b,size){return size;};
			var maxlength = textarea.onkeydown();
			window.stopTyping = tmpFn;

			if (maxlength > 4000)
			{
				counter.appendChild(document.createTextNode(textarea.value.length + ' / ' + maxlength));
				insertAfter(textarea, counter);
			}
		}
	}
	
	function insertAfter(referenceNode, newNode) {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}

	// Add the form submission handlers when the page has finished loading
	addEventListener(window,"load",attachSubmissionHandlers);
	addEventListener(window,"load",addTextAreaMaxLength);
}());


/* lukes extras */

/* merits radios */

OPM.buildGDSradios = function() {
    var e = $(".radio-group-boolean").wrapInner('<fieldset class="inline"/>'),
        n = e.find("input:radio");
    n.each(function(n, o) {
        var t = $(o),
            s = e.find('label[for="' + o.id + '"]').addClass("block-label").prepend(t);
        OPM.toggleCheckedClass(t, s)
    })
}

$(function() {
    $(".radio-group-boolean").length && OPM.buildGDSradios()
}
  
/* feedback banner */
(function (url) {
  var div = document.createElement('div');
  div.style.padding = '10px';
  div.style.width = '1020px';
  div.style.marginRight = 'auto';
  div.style.marginLeft = 'auto';
  div.innerHTML = '<p style="margin-top: 0px; margin-bottom: 0px;"><strong style="color:white;background-color:#f47738;padding:2px 5px;text-transform:uppercase;margin-right:8px;display:inline-block;">BETA</strong><span>This is a new service. Your <a href="' + url + '" target="_blank">feedback</a> will help us to improve it.</span></p>';
  document.body.insertBefore(div, document.body.firstChild);
}('your_URL'));
  
/* loading buttons */
  
/* buttons */

$('input[value="Confirm"], input[value="Complete Application"], input[value="Next"], input[value="Search"], input[value="Select"], input[value="Submit Client"], input[value="Fast-Forward"]').on("click", function() {
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
            n.text("Loading").addClass("disabled").prop('disabled',true) ;
    });