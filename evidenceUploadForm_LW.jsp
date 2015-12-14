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
     <a class="link floatright" href="<c:url value="CCMS_CA05.form?RoofAction_action%3Dreturn%23save%3Dfalse%23validate%3Dfalse%23ezgov_private_hiddenData_uniqueId%3D${uniqueId}" />">Return to Create Application</a>
    <div class="comment">
        If you have all the documents available at application you can upload them here. Caseworkers will be only be able to view your documents once the application has been submitted.
    </div>
	<div class="inputpanel">
        </br>
	   <label><strong>Do you have all the requried documents to upload?</strong>
            <div class="hint-text">These were listed within the means and merits interview.</div>
        </label>
     </div>	    		
    <div class="input radio">
        <input type="radio" name="evi-doc" id="evi-doc-upload" >
        <label for="evi-doc-upload">Yes</label>
        <input type="radio" name="evi-doc" id="evi-doc-upload_no"  >
        <label for="evi-doc-upload_no">No</label>      
  	</div>
      <div id="doc-upload" class="inputPanel">
        		
		<form:form method="post" modelAttribute="evidenceUploadForm" enctype="multipart/form-data">
		
		<c:import url="/evidenceRequired.do?caseID=${caseId}" />
		
		<c:out value="${evidenceRequired}"/>
	 	
		<h3>Files uploaded</h3> 
     <table summary="Documents uploaded">
	<tr class="theader">
		<th>File</th>
		<th>Type</th>
		<th>Date</th>
        <th></th>
	</tr> 
			<c:forEach items="${prevUploadedFiles}" var="uploadedFile">
            <tr>
                <td>${uploadedFile.fileName}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
			</c:forEach>
      </table>
	
 <h3>Add new file</h3>
            <div class="comment">We can only accept PDF, RTF or TIFF files that are less than 8 MB.</div>
		<div class="inputField">
            <form:input type="file"  path="file" id="file" class="fileSelect" />
        </div>
            
            <div class="inputField">
            <div class="input"><label>Document Type</label></div>
            <div class="input">
		  <form:select path="description">
                <form:option value="">Please Select</form:option>
                <form:option value="ADMIN1|Admin1 Form">Admin1 Form</form:option>
                <form:option value="ADV_FRM|Advocates Form">Advocates Form</form:option>
                <form:option value="CRT_BILL|Annotated Court Bill">Annotated Court Bill</form:option>
                <form:option value="APP7|App7">App7</form:option>
                <form:option value="APL_EV|Appeal Evidence">Appeal Evidence</form:option>
                <form:option value="ATT_NT|Attendance Note">Attendance Note</form:option>
                <form:option value="BSTMT|Bank Statement">Bank Statement</form:option>
                <form:option value="BEN_LTR|Benefit Award Letter">Benefit Award Letter</form:option>
                <form:option value="BILL_NAR|Bill Narrative">Bill Narrative</form:option>
                <form:option value="BS_BOOK|Building Society Passbook">Building Society Passbook</form:option>
                <form:option value="BUS_ACC|Business Accounts">Business Accounts</form:option>
                <form:option value="C_CORR|Client Correspondence">Client Correspondence</form:option>
                <form:option value="CNL_BRF|Counsel Brief">Counsel Brief</form:option>
                <form:option value="CNL_FEE|Counsel Fee Note">Counsel Fee Note</form:option>
                <form:option value="COUNSEL|Counsel Opinion">Counsel Opinion</form:option>
                <form:option value="ASS_CERT|Court Assessment Cert’">Court Assessment Cert’</form:option>
                <form:option value="COURT_ORD|Court Order">Court Order</form:option>
                <form:option value="SIP_FRM|Court SIP Form">Court SIP Form</form:option>
                <form:option value="DEBT_EV|Debt Write Off Evidence">Debt Write Off Evidence</form:option>
                <form:option value="D_VCHR|Disbursement Voucher">Disbursement Voucher</form:option>
                <form:option value="EN_JUST|Enhancement Justification">Enhancement Justification</form:option>
                <form:option value="EX_RPT|Expert's Report">Expert's Report</form:option>
                <form:option value="FULL|Full file of papers">Full file of papers</form:option>
                <form:option value="GEN_CORR|General Correspondence">General Correspondence</form:option>
                <form:option value="HMRC|HMRC Forms">HMRC Forms</form:option>
                <form:option value="INS_DOC|Insurance Documents">Insurance Documents</form:option>
                <form:option value="L17|L17">L17</form:option>
                <form:option value="L31|L31">L31</form:option>
                <form:option value="LC|Land Charge Document">Land Charge Document</form:option>
                <form:option value="LATE_SUB|Late Submission Evidence">Late Submission Evidence</form:option>
                <form:option value="MNS_1|Means 1">Means 1</form:option>
                <form:option value="MNS_1C|Means 1C">Means 1C</form:option>
                <form:option value="OUT_EV|Outcomes Evidence">Outcomes Evidence</form:option>
                <form:option value="OUT-CORR|Outgoing Correspondence">Outgoing Correspondence</form:option>
                <form:option value="P45|P45">P45</form:option>
                <form:option value="P60|P60">P60</form:option>
                <form:option value="PNL_MEM|Panel Membership Evidence">Panel Membership Evidence</form:option>
                <form:option value="PPT|Passport">Passport</form:option>
                <form:option value="PAYSLIP|Pay Slip">Pay Slip</form:option>
                <form:option value="PL|Pleadings">Pleadings</form:option>
                <form:option value="PA_DISC|Pre-Action Disclosure">Pre-Action Disclosure</form:option>
                <form:option value="PRF_CST|Record of Profit Costs">Record of Profit Costs</form:option>
                <form:option value="SHRS|Shares Document">Shares Document</form:option>
                <form:option value="STATE|Statement">Statement</form:option>
                <form:option value="TEN_AGR|Tenancy Agreement">Tenancy Agreement</form:option>
                <form:option value="TRV_JUST|Travel Justification">Travel Justification</form:option>
                <form:option value="TRUST|Trust Documents">Trust Documents</form:option>
                <form:option value="UNCAT|Unsolicited Document">Unsolicited Document</form:option>
                <form:option value="UNCAT_RS|Unsolicited Document for RS">Unsolicited Document for RS</form:option>
                <form:option value="OTH_JUS|‘Other’ Justification">‘Other’ Justification</form:option>
                <form:option value="ECF|ECF Evidence">ECF Evidence</form:option>
              </form:select>
            </div>
                
</div>
        <!-- <div class="inputField">
		  <div class="input"><label for="description">Description</label></div>
		  <div class="input"><input id="description" name="description" class="textInput" maxlength="35" type="text" size="60"></input></div>
        </div> -->
	
				  <div class="input">
          <input type="submit" value="Upload" class="secondary-button">
        </div>
	   </div>
    <a class="button" style="margin-top: 40px;" href="<c:url value="CCMS_CA05.form?RoofAction_action%3Dreturn%23save%3Dfalse%23validate%3Dfalse%23ezgov_private_hiddenData_uniqueId%3D${uniqueId}" />">Return to Case</a>
        <div id="id_CCMS_CA01_pageFooterRef" class="perspective pageFooterRef">
              <div class="ccmsPageFooter">
                <div>©Crown Copyright</div>
              </div>
      </div>
	</form:form>
    </div>
 </body>
</html>