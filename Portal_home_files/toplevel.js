function getDataAndPost(applicationName, url) {
	succeed = function(data, textStatus, XMLHttpRequest) {
		if (data.sessionExpired === undefined || !data.sessionExpired) {
			var userNameField = $("#TLLSC_UID");
			var dateField = $("#TLLSC_DATE");
			var hashField = $("#TLLSC_HASH");
			userNameField.val(data.name);
			dateField.val(data.date);
			hashField.val(data.hash);
			var popup = openAppPopup(applicationName, "");
			var form = document.getElementById("topLevelForm");
			form.target = escapeWindowName(applicationName);
			form.action = url;
			form.submit();
			userNameField.val("");
			dateField.val("");
			hashField.val("");
		} else {
			window.location = "sessionExpired.jsp";
		}
	};
	
	failure = function(XMLHttpRequest, textStatus, errorThrown) {
		openAppPopup(applicationName, "launchError.jsp");
	};
	
	$.ajax({url:"ajax/TopLevelDataServlet", dataType:"json", success:succeed, error:failure});
}