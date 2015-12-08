/* Common functions for Pref Supplier version 1.1 */

// close page function
// ------------------------------------------------------------------------
window.onload = fixIE6bug;

// This fixes the CSS flicker on images
function fixIE6bug() {
	var agt = navigator.userAgent.toLowerCase();
	if(agt.indexOf("msie") > -1) {
		document.execCommand("BackgroundImageCache",false,true);
	}
}
// ------------------------------------------------------------------------

// close page function
// ------------------------------------------------------------------------
// window.onunload = closeSession; //temp commented out

// call logout user when the close button is clicked and the page is unloaded
function closeSession(ev) {
    ev = ev || window.event;
    if(ev.pageX || ev.pageY){
            // Firefox support, but does not recognise -y co-ords
    } else {
            if(ev.clientY < 0) {
                //window.open('LogoutUser.do','logout','width=10,height=10,left=120001,top=90000');
            }
    }
}
// ------------------------------------------------------------------------


//  handle key pressed actions
// ------------------------------------------------------------------------
document.onkeydown = mykeyhandler; // trap key event

function mykeyhandler() {
    //F5 keycode set to return
    if (window.event && window.event.keyCode == 116) {
    	window.event.keyCode = 10;
    }
    //Return disabled
    if (window.event && window.event.keyCode == 10) {
        window.event.cancelBubble = true;
        window.event.returnValue = false;
        return false;
    }
    // backspace disabled - but outside of form elements
    if ((window.event && window.event.keyCode == 8) && (event.srcElement.form == null || event.srcElement.isTextEdit == false)) {
        window.event.cancelBubble = true;
        window.event.returnValue = false;
        return false;
    }
}
// ------------------------------------------------------------------------


// Trap mouse events
// ------------------------------------------------------------------------
 document.onmousedown=right;
 document.onmouseup=right;
if (document.layers) window.captureEvents(Event.MOUSEDOWN);
if (document.layers) window.captureEvents(Event.MOUSEUP);
 window.onmousedown=right;
 window.onmouseup=right;

// disable right click
function right(e) {
	if (navigator.appName == 'Netscape' && (e.which == 3 || e.which == 2))
		return false;
	else if (navigator.appName == 'Microsoft Internet Explorer' && (event.button == 2 || event.button == 3)) {
		alert("These features have been disabled");
		return false;
	}
	return true;
}
// ------------------------------------------------------------------------


// openWin() - generic window open function
// ------------------------------------------------------------------------
function openWin(url, name, size){
	var features = 'address=0,location=0,status=0,resizable=1,scrollbars=1';
	features = features + size;
	window.open(url, name, features);
}
// ------------------------------------------------------------------------


// highlightRow function
// call by onmouseover="highlightRow(this)"
// ------------------------------------------------------------------------
function highlightRow(row) {
	row.style.backgroundColor = '#99C88E';
}
// ------------------------------------------------------------------------


// clearRow function
// call by onmouseout="clearRow(this)"
// ------------------------------------------------------------------------
function clearRow(row) {
	row.style.backgroundColor='';
}
// ------------------------------------------------------------------------


// validateDateFormat function
// call by onsubmit="validateDateFormat(document.someForm.someField.value); return false;"
// ------------------------------------------------------------------------
function validateDateFormat(dt) {
	var dtChar = "/";
	var day = dt.charAt(0) + dt.charAt(1);
	var month = dt.charAt(3) + dt.charAt(4);

	if(dt.charAt(8) == '' && dt.charAt(9) == '') {
		var year = 20 + dt.charAt(6) + dt.charAt(7);
	} else {
		var year = dt.charAt(6) + dt.charAt(7) + dt.charAt(8) + dt.charAt(9);
	}

	var error = false;
	if(dt.length > 10) error = true;
	if(!validNo(dt)) error = true;
	if(dt.charAt(2) != '/' || dt.charAt(5) != '/') error = true;
	if(day < 1 || 31 < day) error = true;
	if(month < 1 || 12 < month) error = true;
	if(year < 1900 || 2200 < year) error = true;

	if(error) {
		alert('Please enter a valid date in the format dd/mm/yyyy or dd/mm/yy \n(with the year between 1900 and 2200)');
		return false;
	} else {
		return true;
	}
}
// ------------------------------------------------------------------------


// validNo function
// ------------------------------------------------------------------------
function validNo(checkNo) {
    var validNo = "0123456789./"; //inc forward slash for dates
    for (var i = 0; i < checkNo.length; i++) {
         if (validNo.indexOf(checkNo.charAt(i)) == -1) return false;
    }

    return true;
}
// ------------------------------------------------------------------------


// emptyField function
// takes field f and reutrns true or false if field is empty
// ------------------------------------------------------------------------
function emptyField(f) {
	if(f == '' || f == null){
		return true;
	} else {
		return false;
	}
}
// ------------------------------------------------------------------------


// validateWildcardFormat function
// checks to see if the search text entered has a min of 3 chars
// ------------------------------------------------------------------------
function validateWildcardFormat(f) {
	if(f.length > 2){
		return true;
	} else {
		return false;
	}
}
// ------------------------------------------------------------------------


// validateAllowedCharacters function
// checks that valid text is used, n.b. use with validNo function to check valid
// numbers are entered
// ------------------------------------------------------------------------
function validateAllowedCharacters(checkChars) {
	checkChars = checkChars.toLowerCase();
    var validChars = "abcdefghijklmnopqrstuvwxyz ";
    for (var i = 0; i < checkChars.length; i++) {
         if (validChars.indexOf(checkChars.charAt(i)) == -1) return false;
    }

    return true;
}
// ------------------------------------------------------------------------


// emptyFormField function
// call by onfocus="emptyFormField(this, 'default text')"
// takes the field 'f' and the default text 'val' and set's the field to blank if
// it is the default text and leaves it as is in not
// ------------------------------------------------------------------------
function emptyFormField(f, val) {
	if(f.value.indexOf(val) > -1) {
		f.value = '';
	}
	return f.value;

}
// ------------------------------------------------------------------------


// actionByUrl function
// used for calling onChange or following a link to an action rather than
// submiting a form. e.g. actionByUrl('CaseStatus.do?id=1');
// ------------------------------------------------------------------------
function actionByUrl(url){
	location.href = url;
}
// ------------------------------------------------------------------------



//
//-------------------------------------------------------------------------
function limitTextAreaSize(field, maxlimit) {
    if (field.value.length > maxlimit){ // if too long...trim it!
        var text = field.value.substring(0, maxlimit);
        field.value = text;
    }
}

// submits the hidden form for application that need a post
//-------------------------------------------------------------------------
function submitAppForm(applicationName, url, accounts) {
	document.appsForm.accounts.value = accounts;
	openAppPopup(applicationName);
	var form = document.appsForm;
	form.action = url;
	form.target = escapeWindowName(applicationName);
	form.submit();
}

function openAppPopup(windowName, url) {
	if (url == null) {
		url = "";
	}
	windowName = escapeWindowName(windowName);
	var theWindow = window.open(url,windowName,'address=0,location=0,status=0,resizable=1,scrollbars=1');
	return theWindow;
}

function escapeWindowName(windowName){
	return windowName.replace(/[^a-zA-Z]/g, "");
}

