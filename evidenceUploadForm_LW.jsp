<?xml version='1.0' encoding='utf-8' ?>
<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.1//EN' 'http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='en'>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<head>
<title>Document Upload POC</title>
<link href="<c:url value="/css/ccms.css" />" rel="stylesheet" />
<script src="<c:url value="/js/ccms.js" />" type="text/javascript"></script>
<meta http-equiv="Content-Script-Type" content="text/javascript" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<script src="<c:url value="/js/jquery-1.11.1.js" />" type="text/javascript"></script>

<script>
  $(document).ready($(function() {
    $('input[name=evi-doc]').on('click init-evi-doc', function() {
        $('#doc-upload').toggle($('#evi-doc-upload').prop('checked'));
    }).trigger('init-evi-doc');
}));
  </script>

</head>
<body>
<div class="pageHeaderRef">
	<%@include file="/tiles/common/pageHeader.jsp" %>
</div>
<div class="pageSubHeaderRef"></div>
 <div class="pageTitleRef">
     <h1></h1>
</div>
<div id="id_CCMS_DOC01" class="formInputArea">
    <div class="panelHeaderWithLink">
	<h2>Document Upload</h2>
     <a class="link floatright" href="<c:url value="CCMS_CA05.form?RoofAction_action%3Dreturn%23save%3Dfalse%23validate%3Dfalse%23ezgov_private_hiddenData_uniqueId%3D${uniqueId}" />">Cancel and return to Create Application</a>
        <div class="comment">
        If you have all the documents available at application you can upload them here. Caseworkers will be only be able to view your documents once the application has been submitted.
        </div>	
	<div class="inputpanel">
	   <label>Do you have all the requried documents to upload?</label>
       <label clss="hint-text" style="color: #6F777B;">These were listed within the means and merits interview.</label>
    </div>	    		
    <span class="input radio">
        <input type="radio" name="evi-doc" id="evi-doc-upload" >
        <label for="evi-doc-upload">Yes</label>
        <input type="radio" name="evi-doc" id="evi-doc-upload_no"  >
        <label for="evi-doc-upload_no">No</label>      
  	</span>
  
  
      <br>   		
		<form:form method="post" modelAttribute="evidenceUploadForm" enctype="multipart/form-data">

		
		</br>
		
		<c:import url="/evidenceRequired.do?caseID=${caseId}" />
		
		<c:out value="${evidenceRequired}"/>
	 	
		<p>Files already uploaded:</p>
		<ol>
			<c:forEach items="${prevUploadedFiles}" var="uploadedFile">
				<li>${uploadedFile.fileName}</li>
			</c:forEach>
		</ol>
	<div id="doc-upload">	
		</br>
	 	
		<p>Select files to upload. 
			<%--inputs.</p>--%>
		<br />

		<form:input type="file"  path="file" id="file" />
		
		<form:select path="description">
		   <form:option value="" label="Please select ..."/>
		   <form:option value="${evidenceRequired}"></form:option>
		</form:select>
		<br />
		<label for="description">Description</label>
		<form:textarea  cssStyle="width:406px;" path="description" /><br />
	
		<input type="submit" value="Upload" />
	   </div>
    <a class="button" href="<c:url value="CCMS_CA05.form?RoofAction_action%3Dreturn%23save%3Dfalse%23validate%3Dfalse%23ezgov_private_hiddenData_uniqueId%3D${uniqueId}" />">Confirm</a>
        <div id="id_CCMS_CA01_pageFooterRef" class="perspective pageFooterRef">
              <div class="ccmsPageFooter">
                <div>©Crown Copyright</div>
              </div>
      </div>
	</form:form>
 </body>
</html>